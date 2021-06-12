import { Layout } from "antd";
import "antd/dist/antd.css";
const { Header, Footer } = Layout;

function Head() {
  return (
    <Header style={{ textAlign: "center" }}>
      <img src="logo.svg" alt="Logo" width="60px" height="60px"/>
    </Header>
  );
}

function Foot() {
  const year = new Date().getFullYear();
  return <Footer style={{ textAlign: "center" }}>我梦@{year}</Footer>;
}

export { Head, Foot };
