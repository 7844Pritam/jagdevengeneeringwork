"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/Card"
import { Button } from "../components/Button"
import { Input } from "../components/Input"
import { Badge } from "../components/badge"
import { Plus, Edit, Trash2, Search, MapPin, Briefcase, Clock, Calendar, Users } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from  "../components/Table"

export default function AdminCareers() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("All")
  const [showForm, setShowForm] = useState(false)
  const [editingJob, setEditingJob] = useState(null)
  const [formData, setFormData] = useState({
    title: "",
    department: "",
    location: "",
    type: "Full-time",
    description: "",
    requirements: "",
    responsibilities: "",
    salary: "",
    postedDate: "",
    closingDate: "",
    status: "Open",
  })

  const initialJobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "San Francisco, CA (Remote)",
      type: "Full-time",
      description:
        "We're looking for a Senior Frontend Developer to join our engineering team and help build our next-generation web applications.",
      requirements:
        "• 5+ years of experience with React, JavaScript, and modern frontend technologies\n• Experience with state management libraries (Redux, MobX, etc.)\n• Strong understanding of responsive design and cross-browser compatibility\n• Experience with testing frameworks (Jest, React Testing Library)\n• Bachelor's degree in Computer Science or equivalent experience",
      responsibilities:
        "• Develop new user-facing features using React.js\n• Build reusable components and libraries for future use\n• Translate designs and wireframes into high-quality code\n• Optimize components for maximum performance\n• Collaborate with backend developers and designers",
      salary: "$120,000 - $150,000",
      postedDate: "2024-03-01",
      closingDate: "2024-04-15",
      status: "Open",
      applicants: 24,
    },
    {
      id: 2,
      title: "Marketing Manager",
      department: "Marketing",
      location: "New York, NY",
      type: "Full-time",
      description:
        "We're seeking a Marketing Manager to develop and implement marketing strategies to promote our products and services.",
      requirements:
        "• Bachelor's degree in Marketing, Business, or related field\n• 3+ years of experience in marketing role\n• Experience with digital marketing channels\n• Strong analytical and project management skills\n• Excellent communication skills",
      responsibilities:
        "• Develop marketing plans and strategies\n• Manage social media campaigns and content\n• Analyze market trends and competitor activities\n• Prepare and manage marketing budgets\n• Measure and report on performance of marketing campaigns",
      salary: "$90,000 - $110,000",
      postedDate: "2024-03-05",
      closingDate: "2024-04-05",
      status: "Open",
      applicants: 18,
    },
    {
      id: 3,
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      description:
        "We're looking for a talented UX/UI Designer to create amazing user experiences for our products.",
      requirements:
        "• 3+ years of experience in UX/UI design\n• Proficiency in design tools (Figma, Sketch, Adobe XD)\n• Strong portfolio demonstrating UX process and UI skills\n• Understanding of user-centered design principles\n• Experience with design systems",
      responsibilities:
        "• Create user flows, wireframes, and prototypes\n• Conduct user research and usability testing\n• Collaborate with product managers and developers\n• Design intuitive interfaces for web and mobile applications\n• Maintain and evolve our design system",
      salary: "$85,000 - $115,000",
      postedDate: "2024-03-10",
      closingDate: "2024-04-10",
      status: "Open",
      applicants: 32,
    },
    {
      id: 4,
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Austin, TX (Hybrid)",
      type: "Full-time",
      description:
        "We're seeking a DevOps Engineer to help us build and maintain our cloud infrastructure and deployment pipelines.",
      requirements:
        "• 3+ years of experience in DevOps or SRE role\n• Strong knowledge of AWS or Azure cloud services\n• Experience with containerization (Docker, Kubernetes)\n• Proficiency in scripting languages (Python, Bash)\n• Experience with CI/CD tools (Jenkins, GitHub Actions)",
      responsibilities:
        "• Design and implement cloud infrastructure\n• Automate deployment processes\n• Monitor system performance and troubleshoot issues\n• Implement security best practices\n• Collaborate with development teams to improve delivery processes",
      salary: "$110,000 - $140,000",
      postedDate: "2024-03-12",
      closingDate: "2024-04-12",
      status: "Open",
      applicants: 15,
    },
    {
      id: 5,
      title: "Customer Support Specialist",
      department: "Customer Service",
      location: "Chicago, IL",
      type: "Part-time",
      description:
        "We're looking for a Customer Support Specialist to provide exceptional support to our customers via email, chat, and phone.",
      requirements:
        "• 1+ years of customer service experience\n• Excellent communication and problem-solving skills\n• Ability to work in a fast-paced environment\n• Basic technical knowledge\n• High school diploma or equivalent",
      responsibilities:
        "• Respond to customer inquiries via multiple channels\n• Troubleshoot and resolve customer issues\n• Document customer interactions in CRM system\n• Identify and escalate complex issues\n• Provide feedback to product and engineering teams",
      salary: "$20 - $25 per hour",
      postedDate: "2024-03-15",
      closingDate: "2024-04-15",
      status: "Open",
      applicants: 8,
    },
  ]

  const [jobs, setJobs] = useState(initialJobs)
  const [viewMode, setViewMode] = useState("list") // list, grid
  const [selectedJob, setSelectedJob] = useState(null)

  // Get unique departments for filter
  const departments = ["All", ...new Set(jobs.map((job) => job.department))];

  const filteredJobs = jobs.filter(
    (job) => {
      const matchesSearch = 
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = categoryFilter === "All" || job.department === categoryFilter;
      
      return matchesSearch && matchesCategory;
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault()
    const today = new Date().toISOString().split("T")[0]
    const jobData = {
      ...formData,
      postedDate: formData.postedDate || today,
      applicants: editingJob ? editingJob.applicants : 0,
    }

    if (editingJob) {
      setJobs(
        jobs.map((job) =>
          job.id === editingJob.id ? { ...jobData, id: editingJob.id } : job,
        ),
      )
      setEditingJob(null)
    } else {
      setJobs([...jobs, { ...jobData, id: Date.now() }])
    }
    setFormData({
      title: "",
      department: "",
      location: "",
      type: "Full-time",
      description: "",
      requirements: "",
      responsibilities: "",
      salary: "",
      postedDate: "",
      closingDate: "",
      status: "Open",
    })
    setShowForm(false)
  }

  const handleEdit = (job) => {
    setEditingJob(job)
    setFormData({
      title: job.title,
      department: job.department,
      location: job.location,
      type: job.type,
      description: job.description,
      requirements: job.requirements,
      responsibilities: job.responsibilities,
      salary: job.salary,
      postedDate: job.postedDate,
      closingDate: job.closingDate,
      status: job.status,
    })
    setShowForm(true)
    setSelectedJob(null)
  }

  const handleDelete = (id) => {
    setJobs(jobs.filter((job) => job.id !== id))
    if (selectedJob && selectedJob.id === id) {
      setSelectedJob(null)
    }
  }

  const resetForm = () => {
    setFormData({
      title: "",
      department: "",
      location: "",
      type: "Full-time",
      description: "",
      requirements: "",
      responsibilities: "",
      salary: "",
      postedDate: "",
      closingDate: "",
      status: "Open",
    })
    setEditingJob(null)
    setShowForm(false)
  }

  const handleViewJob = (job) => {
    setSelectedJob(job)
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Careers Management</h1>
        <div className="flex gap-2">
          <Button onClick={() => setShowForm(true)}>
            <Plus className="mr-2 h-4 w-4" />
            Add Job
          </Button>
          <div className="border rounded-md flex">
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("list")}
              className="rounded-r-none"
            >
              List
            </Button>
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className="rounded-none"
            >
              Grid
            </Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            type="search"
            placeholder="Search jobs..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select
          className="p-2 border rounded-md"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          {departments.map((dept) => (
            <option key={dept} value={dept}>
              {dept}
            </option>
          ))}
        </select>
      </div>

      {showForm && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>{editingJob ? "Edit Job" : "Add New Job"}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Job Title</label>
                  <Input
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="e.g., Senior Frontend Developer"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Department</label>
                  <Input
                    required
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    placeholder="e.g., Engineering, Marketing"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Location</label>
                  <Input
                    required
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g., San Francisco, CA (Remote)"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Job Type</label>
                  <select
                    className="w-full p-2 border rounded-md"
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  >
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contract">Contract</option>
                    <option value="Internship">Internship</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Salary Range</label>
                  <Input
                    value={formData.salary}
                    onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
                    placeholder="e.g., $80,000 - $100,000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Status</label>
                  <select
                    className="w-full p-2 border rounded-md"
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                  >
                    <option value="Open">Open</option>
                    <option value="Closed">Closed</option>
                    <option value="Draft">Draft</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Posted Date</label>
                  <Input
                    type="date"
                    value={formData.postedDate}
                    onChange={(e) => setFormData({ ...formData, postedDate: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Closing Date</label>
                  <Input
                    type="date"
                    value={formData.closingDate}
                    onChange={(e) => setFormData({ ...formData, closingDate: e.target.value })}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Job Description</label>
                <textarea
                  required
                  className="w-full p-2 border rounded-md"
                  rows="3"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Enter job description"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Requirements</label>
                <textarea
                  required
                  className="w-full p-2 border rounded-md"
                  rows="5"
                  value={formData.requirements}
                  onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                  placeholder="Enter job requirements (use • for bullet points)"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Responsibilities</label>
                <textarea
                  required
                  className="w-full p-2 border rounded-md"
                  rows="5"
                  value={formData.responsibilities}
                  onChange={(e) => setFormData({ ...formData, responsibilities: e.target.value })}
                  placeholder="Enter job responsibilities (use • for bullet points)"
                />
              </div>
              <div className="flex gap-2">
                <Button type="submit">{editingJob ? "Update Job" : "Add Job"}</Button>
                <Button type="button" variant="outline" onClick={resetForm}>
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {selectedJob ? (
        <div className="mb-6">
          <Button variant="outline" onClick={() => setSelectedJob(null)} className="mb-4">
            Back to Jobs
          </Button>
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold">{selectedJob.title}</h2>
                  <div className="flex flex-wrap gap-3 mt-2">
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Briefcase className="h-3 w-3" />
                      {selectedJob.department}
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {selectedJob.location}
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {selectedJob.type}
                    </Badge>
                  </div>
                </div>
                <Badge variant={selectedJob.status === "Open" ? "default" : "secondary"}>
                  {selectedJob.status}
                </Badge>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 p-3 rounded-md">
                  <div className="text-sm text-gray-500">Salary Range</div>
                  <div className="font-medium">{selectedJob.salary}</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-md">
                  <div className="text-sm text-gray-500">Posted Date</div>
                  <div className="font-medium">{selectedJob.postedDate}</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-md">
                  <div className="text-sm text-gray-500">Applications</div>
                  <div className="font-medium">{selectedJob.applicants}</div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Job Description</h3>
                  <p className="text-gray-700">{selectedJob.description}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Requirements</h3>
                  <div className="whitespace-pre-line text-gray-700">{selectedJob.requirements}</div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Responsibilities</h3>
                  <div className="whitespace-pre-line text-gray-700">{selectedJob.responsibilities}</div>
                </div>
              </div>

              <div className="flex gap-2 mt-6">
                <Button onClick={() => handleEdit(selectedJob)}>Edit Job</Button>
                <Button variant="outline" className="text-red-500" onClick={() => handleDelete(selectedJob.id)}>
                  Delete Job
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      ) : viewMode === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job) => (
            <Card key={job.id} className="overflow-hidden">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{job.title}</CardTitle>
                  <Badge variant={job.status === "Open" ? "default" : "secondary"}>{job.status}</Badge>
                </div>
                <CardDescription>{job.department}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm">
                    <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                    {job.location}
                  </div>
                  <div className="flex items-center text-sm">
                    <Clock className="h-4 w-4 mr-2 text-gray-500" />
                    {job.type}
                  </div>
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                    Posted: {job.postedDate}
                  </div>
                  <div className="flex items-center text-sm">
                    <Users className="h-4 w-4 mr-2 text-gray-500" />
                    {job.applicants} applicants
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{job.description}</p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={() => handleViewJob(job)}>
                    View Details
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => handleEdit(job)}>
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="text-red-500" onClick={() => handleDelete(job.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>Job Listings</CardTitle>
            <CardDescription>Manage your career opportunities</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Posted Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Applicants</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredJobs.length > 0 ? (
                  filteredJobs.map((job) => (
                    <TableRow key={job.id}>
                      <TableCell className="font-medium">{job.title}</TableCell>
                      <TableCell>{job.department}</TableCell>
                      <TableCell>{job.location}</TableCell>
                      <TableCell>{job.type}</TableCell>
                      <TableCell>{job.postedDate}</TableCell>
                      <TableCell>
                        <Badge variant={job.status === "Open" ? "default" : "secondary"}>
                          {job.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{job.applicants}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button size="sm" variant="ghost" onClick={() => handleViewJob(job)}>
                            View
                          </Button>
                          <Button size="sm" variant="ghost" onClick={() => handleEdit(job)}>
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="ghost" className="text-red-500" onClick={() => handleDelete(job.id)}>
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={8} className="text-center py-4">
                      No jobs found
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}

            {/* Website Careers Preview */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Website Careers Preview</CardTitle>
          <CardDescription>How your careers page appears on the website</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-white p-6 border-b">
            <h2 className="text-3xl font-bold mb-2 text-center">Join Our Team</h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
              We're looking for talented individuals to help us build amazing products and services.
              Check out our open positions below.
            </p>

            <div className="flex flex-wrap gap-3 justify-center mb-6">
              {departments.map((dept) => (
                dept !== "All" && (
                  <Badge
                    key={dept}
                    variant={categoryFilter === dept ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => setCategoryFilter(dept)}
                  >
                    {dept}
                  </Badge>
                )
              ))}
            </div>

            <div className="space-y-4">
              {jobs
                .filter((job) => job.status === "Open" && (categoryFilter === "All" || job.department === categoryFilter))
                .slice(0, 3)
                .map((job) => (
                  <div key={job.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                      <div>
                        <h3 className="font-bold text-lg">{job.title}</h3>
                        <div className="flex flex-wrap gap-3 mt-2">
                          <Badge variant="outline" className="flex items-center gap-1">
                            <Briefcase className="h-3 w-3" />
                            {job.department}
                          </Badge>
                          <Badge variant="outline" className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {job.location}
                          </Badge>
                          <Badge variant="outline" className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {job.type}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 mt-2 line-clamp-2">{job.description}</p>
                      </div>
                      <div className="flex items-center gap-2 mt-4 md:mt-0">
                        <Button
                          size="sm"
                          variant="default"
                          onClick={() => handleViewJob(job)}
                        >
                          View Details
                        </Button>
                        <Button size="sm" variant="outline">
                          Apply Now
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              {jobs.filter((job) => job.status === "Open" && (categoryFilter === "All" || job.department === categoryFilter)).length === 0 && (
                <p className="text-center text-gray-600">No open positions found for this department.</p>
              )}
            </div>
            <div className="text-center mt-6">
              <Button variant="outline" onClick={() => setCategoryFilter("All")}>
                View All Openings
              </Button>
            </div>

            </div>
          </CardContent>
        </Card>

    </div>
  )
}