import { Layout, Row, Col, Divider, List } from "antd";
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
      data: []
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
            <Col xs={{ span: 24, offset: 0 }}
              sm={{ span: 24, offset: 0 }}
              md={{ span: 24, offset: 0 }}
              xl={{ span: 18, offset: 3 }}>
              <List
                size="large"
                bordered
                dataSource={this.state.data}
                renderItem={(item) => (
                  <List.Item>
                    <Link
                      to={{
                        pathname: `/list/${item}`,
                        state: {
                          referer: this.props.location.pathname,
                          name: item.name,
                          url: item.url,
                          subtitle: item.subtitle
                        },
                      }}
                    >
                      播放 {item} 尝尝鲜
                    </Link>
                  </List.Item>
                )}
              />
            </Col>
          </Row>
        </Content>
        <Foot />
      </Layout>
    );
  }
  componentDidMount() {
    document.title = this.state.title;
    fetch("data.json").then(res => res.json())
      .then(data => {
        let temp = []
        for (let item of data) {
          temp.push(new Buffer.from(item.name, "base64").toString())
        }
        this.setState({ data: temp })
      })
  }
}
export default HomePage;
