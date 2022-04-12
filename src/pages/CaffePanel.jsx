import React from "react";
import { useParams } from "react-router-dom";

const CaffePanel = () => {
  const params = useParams();

  return <div>CaffePanel {params.caffeId}</div>;
};

export default CaffePanel;
