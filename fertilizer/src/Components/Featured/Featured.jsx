import { useMemo } from "react";
import { data } from "../../result.js";
import "./Featured.css";
import Chart from "../Chart/Chart";
import Bigchart from "../Bigchart";
import Piechart from "../Piechart";

function Featured() {
  const numericData = useMemo(
    () =>
      data.map((d) => ({
        ...d,
        requirement_in_mt_: parseFloat(d.requirement_in_mt_) || 0,
        availability_in_mt_: parseFloat(d.availability_in_mt_) || 0,
      })),
    []
  );

  const topRequired = useMemo(() => {
  const map = {};
  numericData.forEach((item) => {
    const req = parseFloat(item.requirement_in_mt_) || 0;
    map[item.product] = (map[item.product] || 0) + req;
  });
  return Object.entries(map)
    .map(([name, value]) => ({ name, value }))
    .filter((item) => item.value > 0) // <-- remove zeros
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);
}, [numericData]);

const leastAvailable = useMemo(() => {
  const map = {};
  numericData.forEach((item) => {
    const avail = parseFloat(item.availability_in_mt_) || 0;
    map[item.product] = (map[item.product] || 0) + avail;
  });
  return Object.entries(map)
    .map(([name, value]) => ({ name, value }))
    .filter((item) => item.value > 0) // <-- remove zeros
    .sort((a, b) => a.value - b.value)
    .slice(0, 5);
}, [numericData]);


  return (
    <div className="featured">
      <div className="featuredpiechart">
        <Piechart data={topRequired} title="Top 5 Required Products" dataKey="value" />
        <Piechart data={leastAvailable} title="Top 5 Least Available Products" dataKey="value" />
      </div>

      <Bigchart data={numericData} title="Product Availability and Requirements" grid />

      <div className="featuredItem">
        <div className="widgetsm">
          <Chart
            data={numericData}
            title="State wise product"
            grid
            parent="state"
            child="product"
            defaultValue={numericData[0]}
          />
        </div>

        <div className="widgetsm">
          <Chart
            data={numericData}
            title="Year wise product"
            grid
            parent="_year"
            child="product"
            defaultValue={numericData[0]}
          />
        </div>

        <div className="widgetsm">
          <Chart
            data={numericData}
            title="Month wise product"
            grid
            parent="month"
            child="product"
            defaultValue={numericData[0]}
          />
        </div>
      </div>
    </div>
  );
}

export default Featured;
