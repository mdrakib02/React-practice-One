import { LineChart, Line, XAxis,stroke} from "recharts";

export default function Rechart() {
  const students = [
    { name: "Alice", math: 78, english: 82 },
    { name: "Bob", math: 85, english: 74 },
    { name: "Charlie", math: 92, english: 88 },
    { name: "David", math: 69, english: 76 },
    { name: "Emma", math: 83, english: 91 },
    { name: "Frank", math: 77, english: 85 },
    { name: "Grace", math: 88, english: 79 },
    { name: "Hannah", math: 91, english: 87 },
    { name: "Ivy", math: 74, english: 72 },
    { name: "Jack", math: 80, english: 84 },
  ];
  return (
    <div>
      <h1 className="text-3xl font-bold">Here Are top 10 students results</h1>
      <div>
        <LineChart width={800} height={600} data={students}>
        <XAxis dataKey="name"></XAxis>
          <Line dataKey={'math'}></Line>
          <Line dataKey={'english'}></Line>
          
        </LineChart>
      </div>
    </div>
  );
}
