import React from "react";
import ReactDOM from "react-dom";
import { Layout } from "antd";
import "antd/dist/antd.css";
import "./index.scss";
const { Header, Footer, Content } = Layout;
ReactDOM.render(
  <>
    <Layout>
      <Header>Header</Header>
      <Content>Content</Content>
      <Footer style={{ textAlign: "center" }}>我梦@2021</Footer>
    </Layout>
  </>,
  document.getElementById("root")
);
