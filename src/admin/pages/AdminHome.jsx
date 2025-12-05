import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/Card";
import { Users, Building2, MessageSquare, Briefcase, TrendingUp } from "lucide-react";
import { collection, getCountFromServer, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../firebasedb";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { Skeleton } from "../components/Skeleton";

function AdminDashboard() {
  const [stats, setStats] = useState({
    totalConsultations: 0,
    newConsultations: 0,
    totalApplications: 0,
    newApplications: 0,
  });
  const [chartData, setChartData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setIsLoading(true);
        // Consultations
        const consultationsColl = collection(db, "consultations");
        const totalConsultationsSnapshot = await getCountFromServer(consultationsColl);

        const newConsultationsQuery = query(consultationsColl, where("status", "==", "New"));
        const newConsultationsSnapshot = await getCountFromServer(newConsultationsQuery);

        // Careers
        const careersColl = collection(db, "careers");
        const totalApplicationsSnapshot = await getCountFromServer(careersColl);

        const newApplicationsQuery = query(careersColl, where("status", "==", "New"));
        const newApplicationsSnapshot = await getCountFromServer(newApplicationsQuery);

        setStats({
          totalConsultations: totalConsultationsSnapshot.data().count,
          newConsultations: newConsultationsSnapshot.data().count,
          totalApplications: totalApplicationsSnapshot.data().count,
          newApplications: newApplicationsSnapshot.data().count,
        });

        // Chart Data (Mocking daily data for now as Firestore aggregation is complex without cloud functions or client-side processing of all docs)
        // For a real app, you'd aggregate this properly. Here we'll just show a distribution.
        const consultationsDocs = await getDocs(consultationsColl);
        const applicationsDocs = await getDocs(careersColl);

        const data = [
          { name: "Consultations", value: consultationsDocs.size, color: "#f97316" }, // Orange-500
          { name: "Applications", value: applicationsDocs.size, color: "#3b82f6" }, // Blue-500
        ];
        setChartData(data);

      } catch (error) {
        console.error("Error fetching stats:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStats();
  }, []);

  const StatCard = ({ title, value, subtext, icon: Icon, colorClass }) => (
    <Card className="rounded-2xl shadow-sm hover:shadow-md border border-gray-200 transition duration-200">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-gray-600">{title}</CardTitle>
        <div className={`p-2 rounded-lg ${colorClass} bg-opacity-10`}>
          <Icon className={`h-5 w-5 ${colorClass.replace("bg-", "text-")}`} />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-gray-900">{value.toLocaleString()}</div>
        <p className="text-xs text-gray-500 mt-1">{subtext}</p>
      </CardContent>
    </Card>
  );

  const StatCardSkeleton = () => (
    <Card className="rounded-2xl shadow-sm border border-gray-200">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-9 w-9 rounded-lg" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-8 w-16 mb-2" />
        <Skeleton className="h-3 w-32" />
      </CardContent>
    </Card>
  );

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 mt-1">
          Overview of your platform's performance.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {isLoading ? (
          <>
            <StatCardSkeleton />
            <StatCardSkeleton />
            <StatCardSkeleton />
            <StatCardSkeleton />
          </>
        ) : (
          <>
            <StatCard
              title="Total Inquiries"
              value={stats.totalConsultations}
              subtext={`${stats.newConsultations} new inquiries`}
              icon={MessageSquare}
              colorClass="bg-orange-500"
            />
            <StatCard
              title="Job Applications"
              value={stats.totalApplications}
              subtext={`${stats.newApplications} new applications`}
              icon={Briefcase}
              colorClass="bg-blue-500"
            />
            <StatCard
              title="Total Users"
              value={1250} // Mock data
              subtext="+5% from last month"
              icon={Users}
              colorClass="bg-green-500"
            />
            <StatCard
              title="Active Projects"
              value={12} // Mock data
              subtext="2 completed this week"
              icon={Building2}
              colorClass="bg-purple-500"
            />
          </>
        )}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="rounded-2xl shadow-sm border border-gray-200">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-900">Activity Overview</CardTitle>
          </CardHeader>
          <CardContent className="h-80">
            {isLoading ? (
              <Skeleton className="w-full h-full rounded-xl" />
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#6b7280', fontSize: 12 }}
                    dy={10}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#6b7280', fontSize: 12 }}
                  />
                  <Tooltip
                    cursor={{ fill: '#f9fafb' }}
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                  <Bar dataKey="value" radius={[6, 6, 0, 0]} barSize={60}>
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            )}
          </CardContent>
        </Card>

        {/* Recent Activity / Placeholder */}
        <Card className="rounded-2xl shadow-sm border border-gray-200">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-900">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="space-y-4">
                <Skeleton className="h-20 w-full rounded-xl" />
                <Skeleton className="h-20 w-full rounded-xl" />
              </div>
            ) : (
              <div className="space-y-4">
                <div className="p-4 bg-orange-50 rounded-xl border border-orange-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-orange-100 rounded-lg text-orange-600">
                      <MessageSquare className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Review Inquiries</div>
                      <div className="text-xs text-gray-500">You have {stats.newConsultations} new messages</div>
                    </div>
                  </div>
                  <a href="/admin/contact" className="text-sm font-medium text-orange-600 hover:text-orange-700">View</a>
                </div>

                <div className="p-4 bg-blue-50 rounded-xl border border-blue-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                      <Briefcase className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Review Applications</div>
                      <div className="text-xs text-gray-500">You have {stats.newApplications} new applications</div>
                    </div>
                  </div>
                  <a href="/admin/carrers" className="text-sm font-medium text-blue-600 hover:text-blue-700">View</a>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default AdminDashboard;
