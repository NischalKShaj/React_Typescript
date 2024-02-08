import React from "react";
import "./App.css";

interface ReusableComponentProps {
  data: { id: number; name: string; email: string }[];
}

const ReusableComponentList: React.FC<ReusableComponentProps> = ({ data }) => {
  return (
    <div className="list-container">
      {data.map((item) => (
        <div key={item.id} className="item-container">
          <p>{`name:${item.name} email:${item.email}`}</p>
        </div>
      ))}
    </div>
  );
};

export default ReusableComponentList;
