"use client";

import { useState, useEffect } from "react";
import { collection, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebasedb";
import { Card, CardContent, CardHeader, CardTitle } from "../components/Card";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Badge } from "../components/badge";
import { Search, Trash2, FileText, Download, Check, X } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/Table";
import { Skeleton } from "../components/Skeleton";

export default function AdminCareers() {
  const [applications, setApplications] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedApp, setSelectedApp] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        setIsLoading(true);
        const querySnapshot = await getDocs(collection(db, "careers"));
        const apps = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
          date: new Date(doc.data().date).toLocaleDateString("en-US", {
            year: 'numeric', month: 'short', day: 'numeric'
          }),
        }));
        // Sort by date descending
        apps.sort((a, b) => new Date(b.date) - new Date(a.date));
        setApplications(apps);
      } catch (error) {
        console.error("Error fetching applications:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchApplications();
  }, []);

  const filteredApps = applications.filter((app) => {
    const matchesSearch =
      app.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.position.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === "All" || (app.status || "New") === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const handleStatusChange = async (id, newStatus) => {
    try {
      await updateDoc(doc(db, "careers", id), { status: newStatus });
      setApplications(apps => apps.map(app => app.id === id ? { ...app, status: newStatus } : app));
      if (selectedApp?.id === id) {
        setSelectedApp(prev => ({ ...prev, status: newStatus }));
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this application?")) return;
    try {
      await deleteDoc(doc(db, "careers", id));
      setApplications(apps => apps.filter(app => app.id !== id));
      if (selectedApp?.id === id) setSelectedApp(null);
    } catch (error) {
      console.error("Error deleting application:", error);
    }
  };

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Job Applications</h1>
          <p className="text-gray-500 mt-1">Manage incoming career applications.</p>
        </div>
        <div className="flex items-center gap-3 bg-white p-1 rounded-xl border border-gray-200 shadow-sm">
          {["All", "New", "Reviewed", "Shortlisted", "Rejected"].map((status) => (
            <button
              key={status}
              onClick={() => setStatusFilter(status)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${statusFilter === status
                ? "bg-blue-50 text-blue-600 shadow-sm"
                : "text-gray-600 hover:bg-gray-50"
                }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Applications List */}
        <div className="lg:col-span-2 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name, email, or position..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader className="bg-gray-50">
                  <TableRow>
                    <TableHead>Candidate</TableHead>
                    <TableHead>Position</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {isLoading ? (
                    [...Array(5)].map((_, i) => (
                      <TableRow key={i}>
                        <TableCell><Skeleton className="h-4 w-32 mb-1" /><Skeleton className="h-3 w-24" /></TableCell>
                        <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                        <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                        <TableCell><Skeleton className="h-6 w-16 rounded-full" /></TableCell>
                      </TableRow>
                    ))
                  ) : filteredApps.length > 0 ? (
                    filteredApps.map((app) => (
                      <TableRow
                        key={app.id}
                        onClick={() => setSelectedApp(app)}
                        className={`cursor-pointer hover:bg-blue-50/50 transition ${selectedApp?.id === app.id ? "bg-blue-50" : ""
                          }`}
                      >
                        <TableCell className="font-medium">
                          <div className="text-gray-900">{app.fullName}</div>
                          <div className="text-xs text-gray-500">{app.email}</div>
                        </TableCell>
                        <TableCell>{app.position}</TableCell>
                        <TableCell className="text-gray-500">{app.date}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              app.status === "New" ? "default" :
                                app.status === "Shortlisted" ? "secondary" :
                                  app.status === "Rejected" ? "destructive" : "outline"
                            }
                          >
                            {app.status || "New"}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={4} className="text-center py-8 text-gray-500">
                        No applications found.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>

        {/* Application Detail */}
        <div className="lg:col-span-1">
          {selectedApp ? (
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm sticky top-6">
              <div className="p-6 border-b border-gray-100 flex justify-between items-start">
                <div>
                  <h2 className="text-lg font-bold text-gray-900">Application Details</h2>
                  <p className="text-sm text-gray-500 mt-1">Applied on {selectedApp.date}</p>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-red-500 hover:bg-red-50"
                  onClick={() => handleDelete(selectedApp.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>

              <div className="p-6 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">
                    {selectedApp.fullName.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-lg text-gray-900">{selectedApp.fullName}</div>
                    <div className="text-sm text-gray-500">{selectedApp.email}</div>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 rounded-xl space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Position</span>
                    <span className="font-medium text-gray-900">{selectedApp.position}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Status</span>
                    <span className="font-medium text-gray-900">{selectedApp.status || "New"}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">Cover Letter</h3>
                  <div className="p-4 bg-gray-50 rounded-xl text-sm text-gray-600 leading-relaxed max-h-60 overflow-y-auto">
                    {selectedApp.coverLetter}
                  </div>
                </div>

                {selectedApp.resumeUrl && (
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-2">Resume</h3>
                    <a
                      href={selectedApp.resumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition group"
                    >
                      <div className="p-2 bg-red-100 text-red-600 rounded-lg">
                        <FileText className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-900 group-hover:underline">View Resume</div>
                        <div className="text-xs text-gray-500">PDF / DOCX</div>
                      </div>
                      <Download className="h-4 w-4 text-gray-400" />
                    </a>
                  </div>
                )}

                <div className="pt-6 border-t border-gray-100 grid grid-cols-2 gap-3">
                  <Button
                    variant="outline"
                    className="w-full border-green-200 text-green-700 hover:bg-green-50"
                    onClick={() => handleStatusChange(selectedApp.id, "Shortlisted")}
                  >
                    <Check className="mr-2 h-4 w-4" /> Shortlist
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-red-200 text-red-700 hover:bg-red-50"
                    onClick={() => handleStatusChange(selectedApp.id, "Rejected")}
                  >
                    <X className="mr-2 h-4 w-4" /> Reject
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-gray-50 rounded-2xl border border-gray-200 border-dashed p-8 text-center h-64 flex flex-col items-center justify-center text-gray-500">
              <div className="h-12 w-12 rounded-full bg-white border border-gray-200 flex items-center justify-center mb-3 shadow-sm">
                <FileText className="h-5 w-5 text-gray-400" />
              </div>
              <p className="font-medium">Select an application</p>
              <p className="text-sm mt-1">View details and manage candidates</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}