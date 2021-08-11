import { Layout, Row, Col } from "antd";
import { Head, Foot } from "../components/HeadFoot";
import { React, Component } from "react";
import "./PlayerPage.scss"
import DPlayer from "react-dplayer";
const { Content } = Layout;
class IPlayer extends Component {
    constructor(props) {
        super(props);
        const buf = this.props.match.params.encdata.replace(/-/g, '+').replace(/_/g, '/').split('.')
        const buf_0 = new Buffer.from(buf[0], 'base64')
        const buf_0_length = buf_0.length
        const url = new Buffer.from(buf_0.map((e, i) => e ^ ((buf_0_length - i + 0xAF) % 255))).toString()
        let sub_url = ''
        if (buf.length > 1) {
            const buf_1 = new Buffer.from(buf[1], 'base64')
            const buf_1_length = buf_1.length
            sub_url = new Buffer.from(buf_1.map((e, i) => e ^ ((buf_1_length - i + 0xAF) % 255))).toString()
        }
        this.state = {
            title: '播放器',
            name: '播放器',
            url: url,
            subtitle: sub_url ? sub_url : ''
        };
    }
    render() {
        console.log(this.state.url);
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
                                            type: "auto",
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
                            <div>{this.state.name}</div>
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
export default IPlayer;
