import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
} from "recharts";

const ReadPages = () => {
  const [readBooks, setReadBooks] = useState([]);

  useEffect(() => {
    const ReadPages = JSON.parse(localStorage.getItem("bookList")) || [];
    setReadBooks(ReadPages);
  }, []);

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height} L${x + width / 2},${y} L${x + width},${
      y + height
    } Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <div className="w-11/12 mx-auto my-4 md:my-6 lg:my-10">
      <div className="flex justify-center items-center border border-purple-500 p-8">
        <BarChart width={600} height={400} data={readBooks}>
          <XAxis dataKey="bookName" />
          <YAxis dataKey="" />
          <Tooltip />
          <Bar dataKey="pages" fill="#8884d8" shape={<TriangleBar />} />
        </BarChart>
      </div>
    </div>
  );
};

export default ReadPages;
