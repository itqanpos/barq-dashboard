import React from 'react';
import {
  BarChart3,
  DollarSign,
  Users,
  ShoppingCart,
  TrendingUp,
  AlertCircle,
} from 'lucide-react';
import { StatCard } from '../components';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

const Dashboard = () => {
  // بيانات المبيعات اليومية
  const salesData = [
    { date: 'السبت', sales: 4000, revenue: 2400 },
    { date: 'الأحد', sales: 3000, revenue: 1398 },
    { date: 'الاثنين', sales: 2000, revenue: 9800 },
    { date: 'الثلاثاء', sales: 2780, revenue: 3908 },
    { date: 'الأربعاء', sales: 1890, revenue: 4800 },
    { date: 'الخميس', sales: 2390, revenue: 3800 },
    { date: 'الجمعة', sales: 3490, revenue: 4300 },
  ];

  // بيانات الفئات
  const categoryData = [
    { name: 'إلكترونيات', value: 35 },
    { name: 'ملابس', value: 25 },
    { name: 'أغذية', value: 20 },
    { name: 'أخرى', value: 20 },
  ];

  const COLORS = ['#0066cc', '#22c55e', '#f59e0b', '#ef4444'];

  return (
    <div className="space-y-6">
      {/* العنوان */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">لوحة التحكم</h1>
        <p className="text-gray-600 mt-1">مرحباً بك في لوحة تحكم برق POS</p>
      </div>

      {/* الإحصائيات الرئيسية */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="إجمالي المبيعات"
          value="24,500"
          icon={ShoppingCart}
          trend={12}
          color="blue"
        />
        <StatCard
          title="الإيرادات"
          value="ج.م 125,400"
          icon={DollarSign}
          trend={8}
          color="green"
        />
        <StatCard
          title="العملاء"
          value="1,234"
          icon={Users}
          trend={5}
          color="orange"
        />
        <StatCard
          title="الديون المستحقة"
          value="ج.م 45,600"
          icon={AlertCircle}
          trend={-3}
          color="red"
        />
      </div>

      {/* الرسوم البيانية */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* مخطط المبيعات */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">المبيعات الأسبوعية</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="sales"
                stroke="#0066cc"
                name="عدد المبيعات"
              />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#22c55e"
                name="الإيرادات"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* مخطط الفئات */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">المبيعات حسب الفئة</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name} ${value}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* الجدول */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-bold text-gray-900">آخر المبيعات</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                  رقم الفاتورة
                </th>
                <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                  العميل
                </th>
                <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                  المبلغ
                </th>
                <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                  الحالة
                </th>
                <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                  التاريخ
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[1, 2, 3, 4, 5].map((i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">INV-{1000 + i}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">عميل {i}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">ج.م {1000 * i}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                      مدفوع
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {new Date().toLocaleDateString('ar-EG')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
