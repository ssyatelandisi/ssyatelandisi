import { Layout, Row } from "antd";
import { Head, Foot } from "../components/HeadFoot";
import { React, Component } from "react";
const { Content } = Layout;

class Iframe extends Component {
    constructor(props) {
        super(props)
        const buf = this.props.match.params.url.replace(/-/g, '+').replace(/_/g, '/').split('.')
        const buf_0 = new Buffer.from(buf[0], 'base64')
        const buf_0_length = buf_0.length
        const url = new Buffer.from(buf_0.map((e, i) => e ^ ((buf_0_length - i + 0xAF) % 255))).toString()
        this.state = {
            url: url
        }
    }
    render() {
        return <>
            <Layout>
                <Head></Head>
                <Content>
                    <Row>
                        <iframe style={{ minHeight: '100vh', minWidth: '100%' }} seamless sandbox='allow-scripts' scrolling='auto' src={this.state.url} frameborder='0' allowFullScreen="true" title="iframe"></iframe>
                    </Row>
                </Content>
                <Foot></Foot>
            </Layout>
        </>
    }
}
export default Iframe