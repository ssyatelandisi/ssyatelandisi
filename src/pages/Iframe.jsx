import { Layout, Row } from "antd";
import { Head, Foot } from "../components/HeadFoot";
import { React, Component } from "react";
import { decrypt } from "../app";
const { Content } = Layout;
class Iframe extends Component {
    constructor(props) {
        super(props)
        if (null != this.props.match.params.url.match(/!/)) {
            const [key, content] = this.props.match.params.url.split('!')
            this.state = {
                enc: content,
                url: decrypt(content, key)
            }
        } else {
            this.state = {
                enc: this.props.match.params.url,
                url: this.props.match.params.url
            }
        }

    }
    handleChange(event) {
        this.setState({ url: decrypt(this.state.enc, event.target.value) })
    }
    render() {
        return <>
            <Layout>
                <Head></Head>
                <Content>
                    <Row>
                        <iframe style={{ minHeight: '100vh', minWidth: '100%', border: 0 }} seamless sandbox='allow-same-origin allow-scripts' src={this.state.url} allowFullScreen={true} title="iframe"></iframe>
                        <input type="text" name="key" id="key" onChange={e => this.handleChange(e)} placeholder='密码' />
                    </Row>
                </Content>
                <Foot></Foot>
            </Layout>
        </>
    }
}
export default Iframe