"use client";

import { useState, useEffect } from "react";
import { collection, getDocs, doc, setDoc, deleteDoc } from "firebase/firestore";
import { Save, Search, Trash2, Reply, Check, Badge } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/Card";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { TableBody, TableCell, TableHead, TableHeader,Table, TableRow } from "../components/Table";
import { db } from "../../../firebasedb";

function AdminContact() {
  const [contactData, setContactData] = useState({
    companyName: "Your Company Name",
    address: "123 Business Street, City, State 12345",
    phone: "+1 (555) 123-4567",
    email: "contact@yourcompany.com",
    workingHours: "Monday - Friday: 9:00 AM - 6:00 PM",
    description:
      "We're here to help! Contact us for any inquiries about our services and products.",
    socialMedia: {
      facebook: "https://facebook.com/yourcompany",
      twitter: "https://twitter.com/yourcompany",
      linkedin: "https://linkedin.com/company/yourcompany",
      instagram: "https://instagram.com/yourcompany",
    },
  });

  const [messages, setMessages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [replyText, setReplyText] = useState("");

  // Fetch messages from Firestore
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "consultations"));
        const messageList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().fullName,
          email: doc.data().email,
          phone: doc.data().phone,
          message: doc.data().message,
          date: new Date(doc.data().date).toISOString().split("T")[0],
          status: doc.data().status || "New",
        }));
        console.log("aa gaya",messageList)
        setMessages(messageList);
        console.log(messages)
      } catch (error) {
        console.error("Error fetching messages from Firestore:", error);
      }
    };
    fetchMessages();
  }, []);

  const handleSave = (e唐三e) => {
    e.preventDefault();
    alert("Contact information updated successfully!");
  };

  const filteredMessages = messages.filter((message) => {
    const matchesSearch =
      message.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.message.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === "All" || message.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const handleStatusChange = async (id, newStatus) => {
    try {
      await setDoc(
        doc(db, "consultations", id),
        { status: newStatus },
        { merge: true }
      );
      setMessages(
        messages.map((message) =>
          message.id === id ? { ...message, status: newStatus } : message
        )
      );
      if (selectedMessage && selectedMessage.id === id) {
        setSelectedMessage({ ...selectedMessage, status: newStatus });
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const handleDeleteMessage = async (id) => {
    try {
      await deleteDoc(doc(db, "consultations", id));
      setMessages(messages.filter((message) => message.id !== id));
      if (selectedMessage && selectedMessage.id === id) {
        setSelectedMessage(null);
      }
    } catch (error) {
      console.error("Error deleting message:", error);
    }
  };

  const handleSendReply = () => {
    if (!replyText.trim()) return;

    // In a real app, this would send an email
    handleStatusChange(selectedMessage.id, "Replied");
    setReplyText("");
    alert(`Reply sent to ${selectedMessage.name}`);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Contact Us Management</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Messages Management */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Contact Messages</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  type="search"
                  placeholder="Search messages..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <select
                className="p-2 border rounded-md"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="All">All Status</option>
                <option value="New">New</option>
                <option value="Replied">Replied</option>
                <option value="Resolved">Resolved</option>
              </select>
            </div>

            <div className="border rounded-md overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Message</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredMessages.length > 0 ? (
                    filteredMessages.map((message) => (
                      <TableRow
                        key={message.id}
                        className="cursor-pointer hover:bg-gray-50"
                      >
                        <TableCell
                          className="font-medium"
                          onClick={() => setSelectedMessage(message)}
                        >
                          {message.name}
                        </TableCell>
                        <TableCell onClick={() => setSelectedMessage(message)}>
                          {message.message.substring(0, 50)}...
                        </TableCell>
                        <TableCell onClick={() => setSelectedMessage(message)}>
                          {message.date}
                        </TableCell>
                        <TableCell onClick={() => setSelectedMessage(message)}>
                          <Badge
                            variant={
                              message.status === "New"
                                ? "default"
                                : message.status === "Replied"
                                ? "secondary"
                                : "outline"
                            }
                          >
                            {message.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleStatusChange(message.id, "Resolved")}
                              title="Mark as Resolved"
                            >
                              <Check className="h-4 w-4 text-green-500" />
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleDeleteMessage(message.id)}
                              title="Delete"
                            >
                              <Trash2 className="h-4 w-4 text-red-500" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center py-4">
                        No messages found
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>

            {selectedMessage && (
              <div className="mt-6 border rounded-md p-4">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold text-lg">{selectedMessage.message}</h3>
                    <p className="text-sm text-gray-500">
                      From: {selectedMessage.den} ({selectedMessage.email})
                    </p>
                    <p className="text-sm text-gray-500">Phone: {selectedMessage.phone}</p>
                    <p className="text-sm text-gray-500">Date: {selectedMessage.date}</p>
                  </div>
                  <Badge
                    variant={
                      selectedMessage.status === "New"
                        ? "default"
                        : selectedMessage.status === "Replied"
                        ? "secondary"
                        : "outline"
                    }
                  >
                    {selectedMessage.status}
                  </Badge>
                </div>
                <div className="bg-gray-50 p-4 rounded-md mb-4">
                  <p>{selectedMessage.message}</p>
                </div>
                <div className="space-y-4">
                  <textarea
                    className="w-full p-2 border rounded-md"
                    rows="4"
                    placeholder="Type your reply here..."
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                  />
                  <div className="flex gap-2">
                    <Button
                      onClick={handleSendReply}
                      disabled={!replyText.trim()}
                    >
                      <Reply className="mr-2 h-4 w-4" />
                      Send Reply
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => handleStatusChange(selectedMessage.id, "Resolved")}
                    >
                      Mark as Resolved
                    </Button>
                    <Button
                      variant="outline"
                      className="text-red-500"
                      onClick={() => setSelectedMessage(null)}
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default AdminContact;