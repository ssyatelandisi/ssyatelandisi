import { Layout, Row, Col, List, Button } from "antd";
import { Head, Foot } from "../components/HeadFoot";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import { Component } from "react";
const { Content } = Layout;
class ListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.match.params.name,
      // referer: this.props.location.state.referer,
      list: "",
      data: [],
    };
  }
  render() {
    return (
      <Layout>
        <Head />
        <Content>
          <Row>
            <Col
              xs={{ span: 24, offset: 0 }}
              sm={{ span: 24, offset: 0 }}
              md={{ span: 24, offset: 0 }}
              xl={{ span: 18, offset: 3 }}
            >
              <List
                size="large"
                bordered
                dataSource={this.state.data}
                renderItem={(item) => (
                  <List.Item>
                    <Link
                      to={{
                        pathname: `/player/${item.name}`,
                        state: {
                          referer: this.props.location.pathname,
                          name: item.name,
                          url: item.url,
                          subtitle: item.subtitle
                        },
                      }}
                    >
                      {item.name}
                    </Link>
                  </List.Item>
                )}
              />
            </Col>
          </Row>
          <Row>
            <Col
              xs={{ span: 24, offset: 0 }}
              sm={{ span: 24, offset: 0 }}
              md={{ span: 24, offset: 0 }}
              xl={{ span: 18, offset: 3 }}
            >
              <Button shape="round" onClick={() => this.props.history.goBack()}>
                返回
              </Button>
            </Col>
          </Row>
        </Content>
        <Foot />
      </Layout>
    );
  }
  UNSAFE_componentWillMount() {
    try {
      // fetch("//cdn.jsdelivr.net/gh/ssyatelandisi/ssyatelandisi@master/docs/data.json")
      fetch("data.json")
        .then((res) => res.json())
        .then((res) => {
          for (let l of res) {
            if (l.name === new Buffer.from(this.props.match.params.name).toString("base64")) {
              const list = l.list.map(item => {
                return {
                  name: new Buffer.from(item.name, "base64").toString(),
                  url: `//cdn.jsdelivr.net/gh/ssyatelandisi/ssyatelandisi@master/docs/source/${item.url}.m3u8`,
                  subtitle: item.subtitle !== undefined ? `//cdn.jsdelivr.net/gh/ssyatelandisi/ssyatelandisi@master/docs/source/${item.subtitle}.vtt` : ""
                }
              }
              )
              this.setState({
                data: list,
              });
            }
          }
        });
    } catch (error) { }
  }
  componentDidMount() {
    document.title = this.state.title;
  }
}
export default ListPage;
