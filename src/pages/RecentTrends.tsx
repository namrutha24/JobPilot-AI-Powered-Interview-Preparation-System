import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Bar, Pie } from "react-chartjs-2";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

// Available domains for selection
const availableDomains = [
  { id: "software-engineer", label: "Software Engineer" },
  { id: "data-scientist", label: "Data Scientist" },
  { id: "product-manager", label: "Product Manager" },
  { id: "devops-engineer", label: "DevOps Engineer" },
  { id: "frontend-developer", label: "Frontend Developer" },
  { id: "backend-developer", label: "Backend Developer" },
  { id: "full-stack-developer", label: "Full Stack Developer" },
  { id: "cloud-engineer", label: "Cloud Engineer" },
  { id: "information-technology", label: "Information Technology" },
  { id: "finance", label: "Finance" },
  { id: "healthcare", label: "Healthcare" },
  { id: "education", label: "Education" },
  { id: "management", label: "Management" },
  { id: "sales", label: "Sales" },
  { id: "engineering", label: "Engineering" },
  { id: "consulting", label: "Consulting" }
];

// Mock data for companies and salaries
const salaryData = {
  labels: ["Google", "Amazon", "Microsoft", "Meta", "Apple", "Netflix", "Infosys", "TCS", "Wipro", "HCL"],
  datasets: [
    {
      label: "Software Engineer",
      data: [18500000, 17500000, 16800000, 19200000, 18000000, 21000000, 8500000, 7800000, 7500000, 8000000],
      backgroundColor: "rgba(54, 162, 235, 0.7)",
    },
    {
      label: "Data Scientist",
      data: [17500000, 16800000, 16300000, 18500000, 17500000, 20000000, 9000000, 8200000, 8000000, 8500000],
      backgroundColor: "rgba(255, 206, 86, 0.7)",
    },
    {
      label: "Product Manager",
      data: [19200000, 18500000, 17500000, 19600000, 18800000, 21800000, 11000000, 10200000, 9800000, 10500000],
      backgroundColor: "rgba(75, 192, 192, 0.7)",
    },
    {
      label: "DevOps Engineer",
      data: [17000000, 16500000, 16000000, 17800000, 17200000, 19500000, 8800000, 8000000, 7800000, 8200000],
      backgroundColor: "rgba(153, 102, 255, 0.7)",
    },
    {
      label: "Frontend Developer",
      data: [16500000, 15800000, 15500000, 16800000, 16200000, 18500000, 8200000, 7500000, 7200000, 7800000],
      backgroundColor: "rgba(255, 99, 132, 0.7)",
    },
    {
      label: "Backend Developer",
      data: [17800000, 17200000, 16500000, 18200000, 17500000, 19500000, 8800000, 8000000, 7800000, 8500000],
      backgroundColor: "rgba(255, 159, 64, 0.7)",
    },
    {
      label: "Full Stack Developer",
      data: [19000000, 18500000, 17800000, 19500000, 18800000, 20500000, 9500000, 8800000, 8500000, 9000000],
      backgroundColor: "rgba(75, 192, 192, 0.7)",
    },
    {
      label: "Cloud Engineer",
      data: [18200000, 17800000, 17200000, 18800000, 18200000, 19800000, 9200000, 8500000, 8200000, 8800000],
      backgroundColor: "rgba(153, 102, 255, 0.7)",
    },
    {
      label: "Information Technology",
      data: [15000000, 14500000, 14000000, 15500000, 14800000, 16000000, 7000000, 6500000, 6200000, 6800000],
      backgroundColor: "rgba(100, 181, 246, 0.7)",
    },
    {
      label: "Finance",
      data: [17000000, 16500000, 16000000, 17500000, 16800000, 18000000, 9000000, 8500000, 8200000, 8800000],
      backgroundColor: "rgba(255, 193, 7, 0.7)",
    },
    {
      label: "Healthcare",
      data: [14000000, 13500000, 13000000, 14500000, 13800000, 15000000, 6000000, 5500000, 5200000, 5800000],
      backgroundColor: "rgba(76, 175, 80, 0.7)",
    },
    {
      label: "Education",
      data: [12000000, 11500000, 11000000, 12500000, 11800000, 13000000, 5000000, 4500000, 4200000, 4800000],
      backgroundColor: "rgba(33, 150, 243, 0.7)",
    },
    {
      label: "Management",
      data: [18000000, 17500000, 17000000, 18500000, 17800000, 19000000, 10000000, 9500000, 9200000, 9800000],
      backgroundColor: "rgba(244, 67, 54, 0.7)",
    },
    {
      label: "Sales",
      data: [13000000, 12500000, 12000000, 13500000, 12800000, 14000000, 5500000, 5000000, 4700000, 5300000],
      backgroundColor: "rgba(255, 87, 34, 0.7)",
    },
    {
      label: "Engineering",
      data: [16000000, 15500000, 15000000, 16500000, 15800000, 17000000, 8000000, 7500000, 7200000, 7800000],
      backgroundColor: "rgba(156, 39, 176, 0.7)",
    },
    {
      label: "Consulting",
      data: [17500000, 17000000, 16500000, 18000000, 17300000, 18500000, 9500000, 9000000, 8700000, 9300000],
      backgroundColor: "rgba(0, 188, 212, 0.7)",
    }
  ],
};

const companyPieData = {
  labels: ["Google", "Amazon", "Microsoft", "Meta", "Apple", "Netflix", "Infosys", "TCS", "Wipro", "HCL"],
  datasets: [
    {
      label: "Hiring Share",
      data: [15, 14, 12, 10, 12, 8, 10, 8, 6, 5],
      backgroundColor: [
        "#2563eb",  // Google
        "#f59e42",  // Amazon
        "#22c55e",  // Microsoft
        "#ef4444",  // Meta
        "#6366f1",  // Apple
        "#fbbf24",  // Netflix
        "#14b8a6",  // Infosys
        "#8b5cf6",  // TCS
        "#ec4899",  // Wipro
        "#f43f5e",  // HCL
      ],
    },
  ],
};

export default function RecentTrends() {
  const [selectedDomain, setSelectedDomain] = useState("software-engineer");
  const [chartData, setChartData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Function to get chart data for selected domain
  const getChartDataForDomain = (domain: string) => {
    const selectedDataset = salaryData.datasets.find(
      ds => ds.label.toLowerCase().replace(/\s+/g, '-') === domain
    );

    if (!selectedDataset) return null;

    return {
      labels: salaryData.labels,
      datasets: [{
        label: selectedDataset.label,
        data: selectedDataset.data,
        backgroundColor: selectedDataset.backgroundColor,
      }]
    };
  };

  useEffect(() => {
    // Update chart data when domain changes
    const newChartData = getChartDataForDomain(selectedDomain);
    setChartData(newChartData);
    setLoading(false);
  }, [selectedDomain]);

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Recent Market Trends</h1>
        <p className="text-muted-foreground">
          Salary and job data for different roles at top tech companies
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Top Companies by Hiring Share</CardTitle>
          </CardHeader>
          <CardContent>
            <Pie data={companyPieData} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle>Salary Trends by Domain</CardTitle>
            <Select value={selectedDomain} onValueChange={setSelectedDomain}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select domain" />
              </SelectTrigger>
              <SelectContent>
                {availableDomains.map((domain) => (
                  <SelectItem key={domain.id} value={domain.id}>
                    {domain.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div>Loading...</div>
            ) : (
              <Bar
                data={chartData}
                options={{
                  responsive: true,
                  plugins: {
                    legend: { position: "top" as const },
                    title: { display: false },
                  },
                  scales: {
                    y: {
                      beginAtZero: true,
                      ticks: {
                        callback: (value: number) => `₹${(value).toLocaleString('en-IN')}`,
                      },
                    },
                  },
                }}
              />
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 