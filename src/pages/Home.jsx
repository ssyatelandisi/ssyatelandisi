import { Layout, Row, Col } from "antd";
import { Head, Foot } from "../components/HeadFoot";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
const { Content } = Layout;
function Home() {
  return (
    <Layout>
      <Head />
      <Content>
        <Row>
          <Col xs={22} xs-offset={1}>
            <div style={{ textAlign: "center", margin: "1rem" }}>
              📆程序员当前挺忙，暂未开发完此程序。
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={22} xs-offset={1}>
            <div style={{ textAlign: "center", margin: "1rem" }}>
              📆The programmer is currently quite busy and has not finished
              developing this program yet.
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={22} xs-offset={1}>
            <div style={{ textAlign: "center", margin: "1rem" }}>
              📆プログラマーは現在多忙で、まだこのプログラムの開発を終えていません。
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={22} xs-offset={1}>
            <div style={{ textAlign: "center", margin: "1rem" }}>
              <Link to="/player/哆啦A梦" replace>
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
export default Home;
