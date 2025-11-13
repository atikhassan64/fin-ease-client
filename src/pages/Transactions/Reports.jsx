import React, { use, useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import { Calendar } from "lucide-react";
import { AuthContext } from "../../context/AuthContext";

const Reports = () => {
    const {user} = use(AuthContext);
    const [transactions, setTransactions] = useState([]);
    const [selectedMonth, setSelectedMonth] = useState("All");

    useEffect(() => {
        fetch(`https://fin-ease-server-three.vercel.app/transactions?email=${user.email}`)
            .then(res => res.json())
            .then(data => setTransactions(data));
    }, [user]);

    const filteredTransactions =
        selectedMonth === "All"
            ? transactions
            : transactions.filter(
                t => new Date(t.date).getMonth() + 1 === parseInt(selectedMonth)
            );

    const categoryData = Object.values(
        filteredTransactions.reduce((acc, t) => {
            if (!acc[t.category]) acc[t.category] = { name: t.category, value: 0 };
            acc[t.category].value += parseFloat(t.amount);
            return acc;
        }, {})
    );

    const monthlyData = Object.values(
        transactions.reduce((acc, t) => {
            const month = new Date(t.date).toLocaleString("default", { month: "short" });
            if (!acc[month]) acc[month] = { month, total: 0 };
            acc[month].total += parseFloat(t.amount);
            return acc;
        }, {})
    );

    const COLORS = ["#00C49F", "#FFBB28", "#FF8042", "#8884D8", "#FF6666", "#0088FE"];

    return (
        <div className="max-w-6xl mx-auto px-6 py-10">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-semibold text-primary">Financial Reports</h2>

                {/* 🔍 Month Filter */}
                <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-gray-500" />
                    <select
                        value={selectedMonth}
                        onChange={e => setSelectedMonth(e.target.value)}
                        className="border border-amber-100 rounded-lg p-2 outline-none"
                    >
                        <option value="All" >All Months</option>
                        {Array.from({ length: 12 }, (_, i) => (
                            <option key={i + 1} value={i + 1}>
                                {new Date(0, i).toLocaleString("default", { month: "long" })}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* 📈 Charts Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Pie Chart */}
                <div className="bg-white border border-amber-100 rounded-xl shadow p-6">
                    <h3 className="text-lg font-semibold mb-4 text-secondary">
                        Category-wise Summary
                    </h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={categoryData}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={100}
                                label
                            >
                                {categoryData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                {/* Bar Chart */}
                <div className="bg-white border border-amber-100 rounded-xl shadow p-6">
                    <h3 className="text-lg font-semibold mb-4 text-secondary">
                        Monthly Totals
                    </h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={monthlyData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="total" fill="#479f81" radius={[10, 10, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default Reports;
