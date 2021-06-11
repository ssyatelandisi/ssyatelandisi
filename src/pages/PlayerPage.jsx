import { Layout, Row, Col, Button } from "antd";
import { Head, Foot } from "../components/HeadFoot";
import { React, Component } from "react";
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
                    hotkey: true,
                    airplay: true,
                    volume: 1.0,
                    playbackSpeed: [0.5, 0.75, 1.0, 1.25, 1.5],
                    video: {
                      url: this.state.url,
                      type: "hls",
                    },
                  }}
                />
              </div>
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
  componentDidMount() {
    document.title = this.state.title;
  }
}
export default PlayerPage;
