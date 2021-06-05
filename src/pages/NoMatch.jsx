import "antd/dist/antd.css";
import { React, Component } from "react";
import { Head, Foot } from "../components/HeadFoot";
import { Layout } from "antd";
const { Content } = Layout;
class NoMatch extends Component {
  state = { path: decodeURI(window.location.hash.slice(2)) };
  render() {
    return (
      <Layout>
        <Head></Head>
        <Content>
          <div style={{ textAlign: "center" }}>
            <h1>😅404 - {this.state.path}</h1>
          </div>
        </Content>

        <Foot></Foot>
      </Layout>
    );
  }
}
export default NoMatch;
