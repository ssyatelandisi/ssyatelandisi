import { Layout, Row, Col } from "antd";
import { Head, Foot } from "../components/HeadFoot";
import { React, Component } from "react";
import "./PlayerPage.scss"
import DPlayer from "react-dplayer";
import { decrypt } from "../app";
const { Content } = Layout;
class IPlayer extends Component {
    constructor(props) {
        super(props);
        const base_buf = this.props.match.params.encdata.split('.')
        const results = []
        for (let kbuf of base_buf) {
            let [key, content] = kbuf.split('!')
            const dec = decrypt(content, key)
            results.push(new Buffer.from(dec).toString())
        }
        this.state = {
            title: '播放器',
            name: '播放器',
            url: results[0],
            subtitle: results.length > 1 ? results[1] : ''
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
