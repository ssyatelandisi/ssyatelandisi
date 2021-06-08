import { Layout, Row, Col, Button } from "antd";
import { Head, Foot } from "../components/HeadFoot";
import { React, Component } from "react";
import { Link } from "react-router-dom";
import DPlayer from "react-dplayer";
const { Content } = Layout;
class Player extends Component {
  state = {
    name: this.props.match.params.name,
  };
  render() {
    return (
      <>
        <Layout>
          <Head />
          <Content>
            <Row>
              <Col
                xs={{ span: 24, offset: 0 }}
                sm={{ span: 22, offset: 1 }}
                md={{ span: 18, offset: 3 }}
                lg={{ span: 16, offset: 4 }}
                xxl={{ span: 12, offset: 6 }}
              >
                <DPlayer
                  options={{
                    hotkey: true,
                    airplay: true,
                    volume: 1.0,
                    playbackSpeed: [0.5, 0.75, 1.0, 1.25, 1.5],
                    video: {
                      url: "https://cdn.jsdelivr.net/gh/ssyatelandisi/ssyatelandisi@master/docs/哆啦A梦：伴我同行2.m3u8",
                      pic: "https://cdn.jsdelivr.net/gh/ssyatelandisi/ssyatelandisi@master/docs/pic.webp",
                      type: "hls",
                    },
                  }}
                />
                <Link to="/">
                  <Button shape="round">返回</Button>
                </Link>
              </Col>
            </Row>
          </Content>
          <Foot />
        </Layout>
      </>
    );
  }
}
export default Player;
