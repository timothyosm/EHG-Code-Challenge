import { Card } from "antd";
import { React } from "react";
import ApiImg from "../Components/ApiImg";
import LocalImg from "../Components/LocalImg";

function Home() {
  return (
    <div>
      <Card
        style={{ marginBottom: 16, width: "20vw" }}
        title="Rendered on Machine"
      >
        <LocalImg></LocalImg>
      </Card>

      <Card
        style={{ marginBottom: 16, width: "20vw" }}
        title="Rendered on Server"
      >
        <ApiImg></ApiImg>
      </Card>
    </div>
  );
}

export default Home;
