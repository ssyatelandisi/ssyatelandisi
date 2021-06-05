import { Layout } from "antd";
import "antd/dist/antd.css";
const { Header, Footer } = Layout;

function Head() {
  return (
    <Header style={{ textAlign: "center", backgroundColor: "#blue" }}></Header>
  );
}

function Foot() {
  const year = new Date().getFullYear();
  return <Footer style={{ textAlign: "center" }}>我梦@{year}</Footer>;
}

export { Head, Foot };
