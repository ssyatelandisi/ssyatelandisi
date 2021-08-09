import { Component } from "react";
import { Layout, Button } from "antd";
import { Link } from "react-router-dom";
import { Head, Foot } from "../components/HeadFoot";
const { Content } = Layout;
class Input extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '播放器',
            url: '',
            base64: ''
        }

    }
    handleUrlChange(event) {
        const buf = new Buffer.from(event.target.value.replace(/-/g, '+').replace(/_/g, '/'), 'base64').map((e, i) => e ^ ((i + 0xAF) % 255))
        this.setState({ url: new Buffer.from(buf).toString() })
        console.clear()
        console.log(this.state.url);
    }
    handleBase64Change(event) {
        const buf = new Buffer.from(event.target.value.replace(/\+/g, '-').replace(/\//g, '_')).map((e, i) => e ^ ((i + 0xAF) % 255))
        this.setState({ base64: new Buffer.from(buf).toString("base64").replace(/=+/g, '') })
    }
    render() {
        return <>
            <Layout>
                <Head />
                <Content>
                    <div style={{ marginLeft: '1rem' }} ><label htmlFor="name">播放地址：</label></div>
                    <textarea style={{ padding: '.3rem', width: 'calc(100% - 2rem)', marginLeft: '1rem' }} rows='5' type="text" name="url" id="url" onChange={e => this.handleUrlChange(e)} placeholder='已经加密的地址' />
                    <Link
                        to={{
                            pathname: `/player/${this.state.name}`,
                            state: {
                                referer: this.props.location.pathname,
                                name: this.state.name,
                                url: this.state.url,
                                subtitle: ''
                            },
                        }}
                    >
                        <Button style={{ marginLeft: '1rem' }}>确认</Button>
                    </Link>
                    <hr />
                    <textarea style={{ padding: '.3rem', width: 'calc(100% - 2rem)', marginLeft: '1rem' }} rows='5' type="text" name="base64" id="base64" onChange={e => this.handleBase64Change(e)} placeholder='需要加密的内容' />
                    <div style={{ margin: '1rem' }}><code>{this.state.base64}</code></div>
                </Content>
                <Foot />
            </Layout>
        </>
    }
}
export default Input