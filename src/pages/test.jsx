import PieChart from "../components/PieChart";
import CircularProgress from "../components/CircularProgress";
import BarChart from "../components/BarChart";

export default function MyTest() {
  const pieData = [
    { label: "Formation", value: 40 },
    { label: "Absentéisme", value: 25 },
    { label: "Satisfaction", value: 35 },
    { label: "Engagement", value: 30 },
    { label: "Diversité", value: 20 },
    { label: "Éthique", value: 15 },
    { label: "Innovation", value: 10 },
    { label: "Responsabilité sociale", value: 5 },
  ];

    const progressValue = 75; // Example progress value

    const barChartData = [
        { label: "Eau", value: 35 },
        { label: "Déchets", value: 12 },
        { label: "CO₂", value: 22 },
        { label: "Recyclage", value: 78 },
        { label: "Énergies renouvelables", value: 30 },
      ];

return (
    <div className="flex flex-col items-center gap-4 p-4">
        <h1 className="text-xl font-bold text-[#1D4E89] sm:text-2xl">Test Page</h1>
        <PieChart data={pieData} size={200} className="sm:size-300" />
        <div className="flex flex-col gap-4 sm:flex-row">
            <CircularProgress value={progressValue} size={100} className="sm:size-150" />
            <CircularProgress value={50} size={100} className="sm:size-150" />
            <CircularProgress value={100} size={100} className="sm:size-150" />
        </div>

        <BarChart data={barChartData} width={500} barColor="#00B2CA" />
    </div>
);
}
