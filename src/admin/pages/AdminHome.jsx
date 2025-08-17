import { Card, CardContent, CardHeader, CardTitle } from "../components/Card"
import {
  Users,
  Building2,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react"

function AdminDashboard() {
  const StatCard = ({ title, value, change, trend, icon: Icon, color = "blue" }) => (
    <Card className="rounded-2xl shadow-sm hover:shadow-md border border-gray-200 transition duration-200">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className={`h-5 w-5 text-${color}-600`} />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value.toLocaleString()}</div>
        <p className="text-xs text-muted-foreground flex items-center mt-1">
          {trend === "up" ? (
            <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
          ) : (
            <ArrowDownRight className="h-3 w-3 text-red-500 mr-1" />
          )}
          <span
            className={trend === "up" ? "text-green-600" : "text-red-600"}
          >
            {Math.abs(change)}%
          </span>
          <span className="ml-1">from last month</span>
        </p>
      </CardContent>
    </Card>
  )

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-gray-500">
          Welcome back! Here's what's happening with your platform.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        <StatCard
          title="Total Users"
          value={1250}
          change={5}
          trend="up"
          icon={Users}
          color="blue"
        />
        <StatCard
          title="Brands"
          value={320}
          change={2}
          trend="down"
          icon={Building2}
          color="green"
        />
      </div>
    </div>
  )
}

export default AdminDashboard
