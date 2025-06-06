
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../components/Card"
import { Button } from "../components/Button"
import { Badge } from "../components/badge"
import {
  Users,
  Building2,
  FileText,
  Briefcase,
  Mail,
  TrendingUp,
  Eye,
  ArrowUpRight,
  ArrowDownRight,
  MessageSquare,
  Star,
  Target,
} from "lucide-react"

function AdminDashboard() {
  // Sample data that would come from your state management or API
  const [dashboardData] = useState({
    stats: {
      totalUsers: { value: 2543, change: 12, trend: "up" },
      totalBrands: { value: 45, change: 8, trend: "up" },
      totalBlogs: { value: 127, change: 15, trend: "up" },
      totalJobs: { value: 12, change: -2, trend: "down" },
      pendingMessages: { value: 23, change: 5, trend: "up" },
      monthlyViews: { value: 45231, change: 23, trend: "up" },
    },
    recentUsers: [
      { id: 1, name: "John Doe", email: "john@example.com", joinDate: "2024-03-15", status: "Active" },
      { id: 2, name: "Sarah Smith", email: "sarah@example.com", joinDate: "2024-03-14", status: "Active" },
      { id: 3, name: "Mike Johnson", email: "mike@example.com", joinDate: "2024-03-13", status: "Pending" },
    ],
    recentBrands: [
      { id: 1, name: "Tech Solutions Inc", category: "Technology", status: "Active", addedDate: "2024-03-15" },
      { id: 2, name: "Green Earth Foods", category: "Food & Beverage", status: "Active", addedDate: "2024-03-14" },
      { id: 3, name: "Urban Fashion Co", category: "Fashion", status: "Inactive", addedDate: "2024-03-13" },
    ],
    recentBlogs: [
      {
        id: 1,
        title: "The Future of Web Development",
        author: "John Smith",
        status: "Published",
        views: 1250,
        publishDate: "2024-03-15",
      },
      {
        id: 2,
        title: "Building Sustainable Business Practices",
        author: "Sarah Johnson",
        status: "Published",
        views: 890,
        publishDate: "2024-03-14",
      },
      {
        id: 3,
        title: "Digital Marketing Strategies for 2024",
        author: "Mike Davis",
        status: "Draft",
        views: 0,
        publishDate: "2024-03-13",
      },
    ],
    recentJobs: [
      {
        id: 1,
        title: "Senior Frontend Developer",
        department: "Engineering",
        applicants: 24,
        status: "Open",
        postedDate: "2024-03-15",
      },
      {
        id: 2,
        title: "Marketing Manager",
        department: "Marketing",
        applicants: 18,
        status: "Open",
        postedDate: "2024-03-14",
      },
      {
        id: 3,
        title: "UX/UI Designer",
        department: "Design",
        applicants: 32,
        status: "Open",
        postedDate: "2024-03-13",
      },
    ],
    recentMessages: [
      {
        id: 1,
        name: "John Doe",
        subject: "Product Inquiry",
        status: "New",
        date: "2024-03-15",
        priority: "High",
      },
      {
        id: 2,
        name: "Sarah Smith",
        subject: "Support Request",
        status: "Replied",
        date: "2024-03-14",
        priority: "Medium",
      },
      {
        id: 3,
        name: "Mike Johnson",
        subject: "Partnership Opportunity",
        status: "New",
        date: "2024-03-13",
        priority: "High",
      },
    ],
    activities: [
      { id: 1, type: "user", action: "New user registered", details: "John Doe joined", time: "2 hours ago" },
      {
        id: 2,
        type: "blog",
        action: "Blog post published",
        details: "The Future of Web Development",
        time: "4 hours ago",
      },
      {
        id: 3,
        type: "job",
        action: "New job application",
        details: "Frontend Developer position",
        time: "6 hours ago",
      },
      { id: 4, type: "brand", action: "Brand added", details: "Tech Solutions Inc", time: "8 hours ago" },
      { id: 5, type: "message", action: "New contact message", details: "Product inquiry received", time: "1 day ago" },
    ],
  })

  const StatCard = ({ title, value, change, trend, icon: Icon, color = "blue" }) => (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className={`h-4 w-4 text-${color}-600`} />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value.toLocaleString()}</div>
        <p className="text-xs text-muted-foreground flex items-center">
          {trend === "up" ? (
            <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
          ) : (
            <ArrowDownRight className="h-3 w-3 text-red-500 mr-1" />
          )}
          <span className={trend === "up" ? "text-green-600" : "text-red-600"}>{Math.abs(change)}%</span>
          <span className="ml-1">from last month</span>
        </p>
      </CardContent>
    </Card>
  )

  const QuickActionCard = ({ title, description, icon: Icon, color, onClick }) => (
    <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={onClick}>
      <CardContent className="p-4">
        <div className="flex items-center space-x-3">
          <div className={`p-2 rounded-lg bg-${color}-100`}>
            <Icon className={`h-5 w-5 text-${color}-600`} />
          </div>
          <div>
            <h3 className="font-medium">{title}</h3>
            <p className="text-sm text-gray-500">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-gray-500">Welcome back! Here's what's happening with your platform.</p>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        <StatCard
          title="Total Users"
          value={dashboardData.stats.totalUsers.value}
          change={dashboardData.stats.totalUsers.change}
          trend={dashboardData.stats.totalUsers.trend}
          icon={Users}
          color="blue"
        />
        <StatCard
          title="Brands"
          value={dashboardData.stats.totalBrands.value}
          change={dashboardData.stats.totalBrands.change}
          trend={dashboardData.stats.totalBrands.trend}
          icon={Building2}
          color="green"
        />
        <StatCard
          title="Blog Posts"
          value={dashboardData.stats.totalBlogs.value}
          change={dashboardData.stats.totalBlogs.change}
          trend={dashboardData.stats.totalBlogs.trend}
          icon={FileText}
          color="purple"
        />
        <StatCard
          title="Open Jobs"
          value={dashboardData.stats.totalJobs.value}
          change={dashboardData.stats.totalJobs.change}
          trend={dashboardData.stats.totalJobs.trend}
          icon={Briefcase}
          color="orange"
        />
        <StatCard
          title="New Messages"
          value={dashboardData.stats.pendingMessages.value}
          change={dashboardData.stats.pendingMessages.change}
          trend={dashboardData.stats.pendingMessages.trend}
          icon={Mail}
          color="red"
        />
        <StatCard
          title="Monthly Views"
          value={dashboardData.stats.monthlyViews.value}
          change={dashboardData.stats.monthlyViews.change}
          trend={dashboardData.stats.monthlyViews.trend}
          icon={Eye}
          color="indigo"
        />
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <QuickActionCard
              title="Add User"
              description="Create a new user account"
              icon={Users}
              color="blue"
              onClick={() => console.log("Navigate to add user")}
            />
            <QuickActionCard
              title="Add Brand"
              description="Register a new brand"
              icon={Building2}
              color="green"
              onClick={() => console.log("Navigate to add brand")}
            />
            <QuickActionCard
              title="Write Blog"
              description="Create a new blog post"
              icon={FileText}
              color="purple"
              onClick={() => console.log("Navigate to add blog")}
            />
            <QuickActionCard
              title="Post Job"
              description="Add a new job listing"
              icon={Briefcase}
              color="orange"
              onClick={() => console.log("Navigate to add job")}
            />
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {dashboardData.activities.map((activity) => (
                <div key={activity.id} className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    {activity.type === "user" && <Users className="h-4 w-4 text-blue-500" />}
                    {activity.type === "blog" && <FileText className="h-4 w-4 text-purple-500" />}
                    {activity.type === "job" && <Briefcase className="h-4 w-4 text-orange-500" />}
                    {activity.type === "brand" && <Building2 className="h-4 w-4 text-green-500" />}
                    {activity.type === "message" && <Mail className="h-4 w-4 text-red-500" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">{activity.action}</p>
                    <p className="text-sm text-gray-500">{activity.details}</p>
                  </div>
                  <div className="text-xs text-gray-400">{activity.time}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Messages */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Recent Messages</CardTitle>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {dashboardData.recentMessages.map((message) => (
                <div key={message.id} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-sm">{message.name}</p>
                    <p className="text-sm text-gray-500">{message.subject}</p>
                  </div>
                  <div className="text-right">
                    <Badge
                      variant={message.status === "New" ? "default" : "secondary"}
                      className={message.priority === "High" ? "border-red-200" : ""}
                    >
                      {message.status}
                    </Badge>
                    <p className="text-xs text-gray-400 mt-1">{message.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Users */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Recent Users</CardTitle>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {dashboardData.recentUsers.map((user) => (
                <div key={user.id} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-sm">{user.name}</p>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
                  <div className="text-right">
                    <Badge variant={user.status === "Active" ? "default" : "secondary"}>{user.status}</Badge>
                    <p className="text-xs text-gray-400 mt-1">{user.joinDate}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Brands */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Recent Brands</CardTitle>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {dashboardData.recentBrands.map((brand) => (
                <div key={brand.id} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-sm">{brand.name}</p>
                    <p className="text-sm text-gray-500">{brand.category}</p>
                  </div>
                  <div className="text-right">
                    <Badge variant={brand.status === "Active" ? "default" : "secondary"}>{brand.status}</Badge>
                    <p className="text-xs text-gray-400 mt-1">{brand.addedDate}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Blog Posts */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Recent Blog Posts</CardTitle>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {dashboardData.recentBlogs.map((blog) => (
                <div key={blog.id} className="space-y-2">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <p className="font-medium text-sm line-clamp-1">{blog.title}</p>
                      <p className="text-sm text-gray-500">By {blog.author}</p>
                    </div>
                    <Badge variant={blog.status === "Published" ? "default" : "secondary"}>{blog.status}</Badge>
                  </div>
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>{blog.publishDate}</span>
                    <span className="flex items-center">
                      <Eye className="h-3 w-3 mr-1" />
                      {blog.views}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Job Listings */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Recent Job Listings</CardTitle>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {dashboardData.recentJobs.map((job) => (
                <div key={job.id} className="space-y-2">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <p className="font-medium text-sm">{job.title}</p>
                      <p className="text-sm text-gray-500">{job.department}</p>
                    </div>
                    <Badge variant={job.status === "Open" ? "default" : "secondary"}>{job.status}</Badge>
                  </div>
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>Posted: {job.postedDate}</span>
                    <span className="flex items-center">
                      <Users className="h-3 w-3 mr-1" />
                      {job.applicants} applicants
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Performance Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <Target className="h-8 w-8 mx-auto mb-2 text-blue-600" />
              <div className="text-2xl font-bold text-blue-600">85%</div>
              <div className="text-sm text-gray-600">User Engagement</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <TrendingUp className="h-8 w-8 mx-auto mb-2 text-green-600" />
              <div className="text-2xl font-bold text-green-600">+23%</div>
              <div className="text-sm text-gray-600">Growth Rate</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <Star className="h-8 w-8 mx-auto mb-2 text-purple-600" />
              <div className="text-2xl font-bold text-purple-600">4.8</div>
              <div className="text-sm text-gray-600">Avg Rating</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <MessageSquare className="h-8 w-8 mx-auto mb-2 text-orange-600" />
              <div className="text-2xl font-bold text-orange-600">92%</div>
              <div className="text-sm text-gray-600">Response Rate</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* System Status */}
      <Card>
        <CardHeader>
          <CardTitle>System Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div>
                <p className="font-medium">Website</p>
                <p className="text-sm text-gray-500">All systems operational</p>
              </div>
              <div className="h-3 w-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div>
                <p className="font-medium">Database</p>
                <p className="text-sm text-gray-500">Running smoothly</p>
              </div>
              <div className="h-3 w-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
              <div>
                <p className="font-medium">Email Service</p>
                <p className="text-sm text-gray-500">Minor delays</p>
              </div>
              <div className="h-3 w-3 bg-yellow-500 rounded-full"></div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default AdminDashboard
