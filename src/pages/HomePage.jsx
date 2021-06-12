import { Layout, Row, Col } from "antd";
import { Head, Foot } from "../components/HeadFoot";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import { Component } from "react";
const { Content } = Layout;
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "React App",
    };
  }
  render() {
    return (
      <Layout>
        <Head />
        <Content>
          <Row>
            <Col xs={24}>
              <div style={{ textAlign: "center", margin: "1rem" }}>
                📆程序员当前挺忙，暂未开发完此程序。
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={24}>
              <div style={{ textAlign: "center", margin: "1rem" }}>
                📆The programmer is currently quite busy and has not finished
                developing this program yet.
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={24}>
              <div style={{ textAlign: "center", margin: "1rem" }}>
                📆プログラマーは現在多忙で、まだこのプログラムの開発を終えていません。
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={24}>
              <div style={{ textAlign: "center", margin: "1rem" }}>
                <Link
                  to={{
                    pathname: "/list/哆啦A梦",
                    state: {
                      referer: this.props.location.pathname,
                    },
                  }}
                  replace
                >
                  播放 哆啦A梦 尝尝鲜
                </Link>
              </div>
            </Col>
          </Row>
        </Content>
        <Foot />
      </Layout>
    );
  }
  componentDidMount() {
    document.title = this.state.title;
  }
}
export default HomePage;
