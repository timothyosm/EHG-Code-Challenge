import React from "react";
import { Card } from "antd";

function Performance(props) {
  return (
    <div>
      <Card title="Performance">
        Rendered in {props.performanceMs.toFixed(2)} Miliseconds using{" "}
        {props.colorCounter} discrete colors
      </Card>
    </div>
  );
}

export default Performance;
