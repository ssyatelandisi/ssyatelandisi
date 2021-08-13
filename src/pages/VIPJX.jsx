import { Layout, Row, Col, Button } from "antd";
import { Head, Foot } from "../components/HeadFoot";
import { React, Component } from "react";
import "./PlayerPage.scss"
const { Content } = Layout;

class VIPJX extends Component {
    constructor(props) {
        super(props)
        this.state = {
            vipjx: `https://jx.aidouer.net/?url=${(new URLSearchParams(this.props.location.search.substring(1))).get('url')}`
        }
    }
    render() {
        return <>
            <Layout>
                <Head></Head>
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
                                <iframe className="dplayer" src={this.state.vipjx} frameborder="0" allowFullScreen="true" title="vip解析"></iframe>
                            </div>
                            <div><Button shape="round" onClick={() => this.props.history.goBack()}>返回</Button></div>
                        </Col>
                    </Row>
                </Content>
                <Foot></Foot>
            </Layout>
        </>
    }
}
export default VIPJX