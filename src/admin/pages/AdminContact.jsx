"use client";

import React, { useState, useEffect } from "react";
import { collection, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../../firebasedb";
import { Search, Mail, Phone, Trash2, CheckCircle, Reply } from "lucide-react";
import { Button } from "../components/Button";
import { Badge } from "../components/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/Table";
import { Skeleton } from "../components/Skeleton";

function AdminContact() {
  const [messages, setMessages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        setIsLoading(true);
        const querySnapshot = await getDocs(collection(db, "consultations"));
        const messageList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().fullName,
          email: doc.data().email,
          phone: doc.data().phone,
          message: doc.data().message,
          inquiryType: doc.data().inquiryType || "General",
          date: new Date(doc.data().date).toISOString().split("T")[0],
          status: doc.data().status || "New",
        }));
        // Sort by date descending (newest first)
        messageList.sort((a, b) => new Date(b.date) - new Date(a.date));
        setMessages(messageList);
      } catch (error) {
        console.error("Error fetching messages from Firestore:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMessages();
  }, []);

  const filteredMessages = messages.filter((msg) => {
    const matchesSearch =
      msg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      msg.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      msg.message.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === "All" || msg.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const handleStatusChange = async (id, newStatus) => {
    try {
      await updateDoc(doc(db, "consultations", id), { status: newStatus });
      setMessages(msgs => msgs.map(msg => msg.id === id ? { ...msg, status: newStatus } : msg));
      if (selectedMessage?.id === id) {
        setSelectedMessage(prev => ({ ...prev, status: newStatus }));
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const handleDeleteMessage = async (id) => {
    if (!window.confirm("Are you sure you want to delete this message?")) return;
    try {
      await deleteDoc(doc(db, "consultations", id));
      setMessages(msgs => msgs.filter(msg => msg.id !== id));
      if (selectedMessage?.id === id) setSelectedMessage(null);
    } catch (error) {
      console.error("Error deleting message:", error);
    }
  };

  const handleReply = (email) => {
    window.location.href = `mailto:${email}`;
    // Optimistically update status to Replied
    if (selectedMessage) {
      handleStatusChange(selectedMessage.id, "Replied");
    }
  };

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Inquiries</h1>
          <p className="text-gray-500 mt-1">Manage your incoming messages and consultations.</p>
        </div>
        <div className="flex items-center gap-3 bg-white p-1 rounded-xl border border-gray-200 shadow-sm">
          {["All", "New", "Replied", "Resolved"].map((status) => (
            <button
              key={status}
              onClick={() => setStatusFilter(status)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${statusFilter === status
                ? "bg-orange-50 text-orange-600 shadow-sm"
                : "text-gray-600 hover:bg-gray-50"
                }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Message List */}
        <div className="lg:col-span-2 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name, email, or content..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none transition shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader className="bg-gray-50">
                  <TableRow>
                    <TableHead>Sender</TableHead>
                    <TableHead>Subject</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {isLoading ? (
                    [...Array(5)].map((_, i) => (
                      <TableRow key={i}>
                        <TableCell><Skeleton className="h-4 w-32 mb-1" /><Skeleton className="h-3 w-24" /></TableCell>
                        <TableCell><Skeleton className="h-4 w-20 mb-1" /><Skeleton className="h-3 w-40" /></TableCell>
                        <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                        <TableCell><Skeleton className="h-6 w-16 rounded-full" /></TableCell>
                      </TableRow>
                    ))
                  ) : filteredMessages.length > 0 ? (
                    filteredMessages.map((msg) => (
                      <TableRow
                        key={msg.id}
                        onClick={() => setSelectedMessage(msg)}
                        className={`cursor-pointer hover:bg-orange-50/50 transition ${selectedMessage?.id === msg.id ? "bg-orange-50" : ""
                          }`}
                      >
                        <TableCell className="font-medium">
                          <div className="text-gray-900">{msg.name}</div>
                          <div className="text-xs text-gray-500">{msg.email}</div>
                        </TableCell>
                        <TableCell>
                          <div className="text-gray-900 font-medium">{msg.inquiryType}</div>
                          <div className="text-xs text-gray-500 truncate max-w-[200px]">{msg.message}</div>
                        </TableCell>
                        <TableCell className="text-gray-500">{msg.date}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              msg.status === "New" ? "default" :
                                msg.status === "Resolved" ? "secondary" : "outline"
                            }
                            className={msg.status === "New" ? "bg-orange-500 hover:bg-orange-600" : ""}
                          >
                            {msg.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={4} className="text-center py-12 text-gray-500">
                        <div className="flex flex-col items-center justify-center">
                          <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center mb-3">
                            <Search className="h-6 w-6 text-gray-400" />
                          </div>
                          <p>No messages found matching your criteria.</p>
                        </div>
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div >
          </div >
        </div >

        {/* Message Detail */}
        < div className="lg:col-span-1" >
          {
            selectedMessage ? (
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm sticky top-6" >
                <div className="p-6 border-b border-gray-100 flex justify-between items-start">
                  <div>
                    <h2 className="text-lg font-bold text-gray-900">Message Details</h2>
                    <p className="text-sm text-gray-500 mt-1">
                      Received on {selectedMessage.date}
                    </p>
                  </div>
                  <button
                    onClick={() => handleDeleteMessage(selectedMessage.id)}
                    className="text-gray-400 hover:text-red-500 transition p-1 hover:bg-red-50 rounded-lg"
                    title="Delete Message"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>

                <div className="p-6 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-lg">
                        {selectedMessage.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{selectedMessage.name}</div>
                        <div className="text-sm text-gray-500">{selectedMessage.email}</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="p-3 bg-gray-50 rounded-xl">
                        <div className="text-gray-500 text-xs mb-1">Phone</div>
                        <div className="font-medium text-gray-900">{selectedMessage.phone}</div>
                      </div>
                      <div className="p-3 bg-gray-50 rounded-xl">
                        <div className="text-gray-500 text-xs mb-1">Inquiry Type</div>
                        <div className="font-medium text-gray-900">{selectedMessage.inquiryType}</div>
                      </div>
                    </div>

                    <div>
                      <div className="text-sm font-medium text-gray-700 mb-2">Message</div>
                      <div className="p-4 bg-gray-50 rounded-xl text-gray-600 text-sm leading-relaxed">
                        {selectedMessage.message}
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-100 space-y-4">
                    <h3 className="text-sm font-semibold text-gray-900">Quick Actions</h3>
                    <div className="flex gap-2">
                      {selectedMessage.status !== "Resolved" && (
                        <button
                          onClick={() => handleStatusChange(selectedMessage.id, "Resolved")}
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition"
                        >
                          <Check className="h-4 w-4" />
                          Mark Resolved
                        </button>
                      )}
                      <a
                        href={`mailto:${selectedMessage.email}`}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-orange-500 text-sm font-medium text-white hover:bg-orange-600 shadow-sm transition"
                      >
                        <Reply className="h-4 w-4" />
                        Reply via Email
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-gray-50 rounded-2xl border border-gray-200 border-dashed p-8 text-center h-64 flex flex-col items-center justify-center text-gray-500">
                <div className="h-12 w-12 rounded-full bg-white border border-gray-200 flex items-center justify-center mb-3 shadow-sm">
                  <Reply className="h-5 w-5 text-gray-400" />
                </div>
                <p className="font-medium">Select a message</p>
                <p className="text-sm mt-1">View details and reply to inquiries</p>
              </div>
            )
          }
        </div >
      </div >
    </div >
  );
}

export default AdminContact;