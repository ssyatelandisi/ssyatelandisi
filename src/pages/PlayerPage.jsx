import { Layout, Row, Col, Button } from "antd";
import { Head, Foot } from "../components/HeadFoot";
import { React, Component } from "react";
import "./PlayerPage.scss"
import DPlayer from "react-dplayer";
const { Content } = Layout;
class PlayerPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.match.params.name,
      list: this.props.match.params.list,
      name: this.props.location.state.name,
      url: this.props.location.state.url,
      subtitle: this.props.location.state.subtitle
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
              lg={{ span: 22, offset: 1 }}
              xxl={{ span: 12, offset: 6 }}
            >
              <div id="player_box">
                <DPlayer
                  options={{
                    volume: 1.0,
                    screenshot: true,
                    video: {
                      url: this.state.url,
                      type: "hls",
                    },
                    subtitle: {
                      url: this.state.subtitle,
                      fontSize: "25px",
                      bottom: "2%",
                      color: "#fff"
                    },
                    contextmenu: [
                    ],
                  }}
                />
              </div>
              <div>{this.props.location.state.name}</div>
              <div><Button shape="round" onClick={() => this.props.history.goBack()}>返回</Button></div>
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
export default PlayerPage;
