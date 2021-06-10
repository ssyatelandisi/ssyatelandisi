import "antd/dist/antd.css";
import { React, Component } from "react";
import { Head, Foot } from "../components/HeadFoot";
import { Layout, Button } from "antd";
const { Content } = Layout;
class NoMatchPage extends Component {
  constructor(props) {
    super(props);
    this.state = { path: decodeURI(window.location.hash.slice(2)) };
  }
  render() {
    return (
      <Layout>
        <Head></Head>
        <Content>
          <div style={{ textAlign: "center" }}>
            <h1>😅404 - {this.state.path}</h1>
            <Button shape="round" onClick={() => this.props.history.goBack()}>
              返回
            </Button>
          </div>
        </Content>
        <Foot></Foot>
      </Layout>
    );
  }
  componentDidMount() {
    document.title = "😅404 - Page";
  }
}
export default NoMatchPage;
