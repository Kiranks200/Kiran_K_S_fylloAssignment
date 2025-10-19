import { PieChart, Pie, Cell, Tooltip } from "recharts";
import "./Piechart.css";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#FF0000"];
const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
  name,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${name} ${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

function Piechart({ data, title }) {
  const chartData = data.filter(item => item.value > 0); // remove zeros

  return (
    <div className="piechart">
      <h3 className="piechartTitle">{title}</h3>
      <PieChart width={500} height={500}>
        <Pie
          data={chartData}
          cx={250}
          cy={220}
          labelLine={false}
          label={(props) => renderCustomizedLabel({ ...props, name: chartData[props.index].name })}
          outerRadius={170}
          dataKey="value"
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip formatter={(value) => `${value}`} />
      </PieChart>
    </div>
  );
}

export default Piechart;
