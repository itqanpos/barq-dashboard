// أنواع البيانات الأساسية

export interface User {
  id: string;
  email: string;
  displayName: string;
  role: 'admin' | 'manager' | 'cashier';
  createdAt: Date;
}

export interface Product {
  id: string;
  name: string;
  barcode: string;
  price: number;
  cost: number;
  quantity: number;
  category: string;
  image?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Customer {
  id: string;
  name: string;
  phone: string;
  email?: string;
  address?: string;
  totalPurchases: number;
  totalDebt: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Invoice {
  id: string;
  invoiceNumber: string;
  customerId: string;
  items: InvoiceItem[];
  subtotal: number;
  tax: number;
  discount: number;
  total: number;
  paymentMethod: 'cash' | 'card' | 'transfer';
  status: 'pending' | 'paid' | 'cancelled';
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface InvoiceItem {
  productId: string;
  productName: string;
  quantity: number;
  price: number;
  total: number;
}

export interface Payment {
  id: string;
  invoiceId: string;
  customerId: string;
  amount: number;
  method: 'cash' | 'card' | 'transfer';
  notes?: string;
  createdAt: Date;
}

export interface Debt {
  id: string;
  customerId: string;
  invoiceId: string;
  amount: number;
  dueDate: Date;
  status: 'pending' | 'partial' | 'paid';
  createdAt: Date;
  updatedAt: Date;
}

export interface DashboardStats {
  totalSales: number;
  totalRevenue: number;
  totalCustomers: number;
  totalDebts: number;
  totalProducts: number;
  lowStockProducts: number;
  todaySales: number;
  thisMonthRevenue: number;
}

export interface SalesData {
  date: string;
  sales: number;
  revenue: number;
  transactions: number;
}

export interface CategorySales {
  category: string;
  sales: number;
  percentage: number;
}
