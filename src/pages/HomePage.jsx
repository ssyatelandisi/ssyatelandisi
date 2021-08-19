import { Layout, Row, Col, List, Button } from "antd";
import { Head, Foot } from "../components/HeadFoot";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import { Component } from "react";
import { SpecialDay } from "../components/SpecialDay";

const { Content } = Layout;
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "React App",
      data: [],
      duanwu: true,
      specialDay_data: (new URLSearchParams(this.props.location.search.substring(1))).get('s')
    }
  }
  render() {
    return (
      <Layout>
        <Head />
        <Content>
          <Row>
            <Col xs={{ span: 22, offset: 1 }}
              sm={{ span: 22, offset: 1 }}
              md={{ span: 22, offset: 1 }}
              xl={{ span: 18, offset: 3 }}>
              <Link to={{ pathname: '/laboratory' }}><Button type='link' style={{ paddingLeft: 24 }}>实验功能</Button></Link>
              <List
                size="large"
                bordered
                dataSource={this.state.data}
                renderItem={(item) => (
                  <>
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
                        查看 {item}
                      </Link>
                    </List.Item>
                  </>
                )}
              />
            </Col>
          </Row>
        </Content>
        <Foot />
        <SpecialDay data={this.state.specialDay_data} />
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
    // console.log((new URLSearchParams(this.props.location.search.substring(1))).get('s'));
  }
}
export default HomePage;
