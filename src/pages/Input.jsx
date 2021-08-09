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
            subtitle: '',
            base64: ''
        }

    }
    handleUrlChange(event) {
        const buf = event.target.value.replace(/-/g, '+').replace(/_/g, '/').split('|')
        const buf_0 = new Buffer.from(buf[0], 'base64').map((e, i) => e ^ ((i + 0xAF) % 255))
        this.setState({ url: new Buffer.from(buf_0).toString() })
        if (buf.length === 2) {
            const buf_1 = new Buffer.from(buf[1], 'base64').map((e, i) => e ^ ((i + 0xAF) % 255))
            fetch(new Buffer.from(buf_1).toString()).then(res => res.text).then(res => {
                this.setState({ subtitle: URL.createObjectURL(new Blob([res], { "type": "text/vtt" })) })
            })
        }
        console.clear()
        console.log(this.state.url);
    }
    handleBase64Change(event) {
        const buf = new Buffer.from(event.target.value).map((e, i) => e ^ ((i + 0xAF) % 255))
        this.setState({ base64: new Buffer.from(buf).toString("base64").replace(/=+/g, '').replace(/\+/g, '-').replace(/\//g, '_') })
    }
    handleSubtitleChange(event) {
        sessionStorage.setItem("subtitle", event.target.value)
    }
    generateSubtitle(event) {
        if (sessionStorage.getItem("subtitle")) {
            const blob = new Blob([sessionStorage.getItem("subtitle")], { "type": "text/vtt" })
            this.setState({
                subtitle: URL.createObjectURL(blob)
            })
        }
    }
    render() {
        return <>
            <Layout>
                <Head />
                <Content>
                    <div style={{ marginLeft: '1rem' }} ><label htmlFor="name">播放地址：</label></div>
                    <textarea style={{ padding: '.3rem', width: 'calc(100% - 2rem)', marginLeft: '1rem' }} rows='5' type="text" name="url" id="url" onChange={e => this.handleUrlChange(e)} placeholder='已经加密的地址' />
                    <textarea style={{ padding: '.3rem', width: 'calc(100% - 2rem)', marginLeft: '1rem' }} rows='5' type="text" name="subtitle" id="subtitle" onChange={e => this.handleSubtitleChange(e)} placeholder='可选，vtt字幕内容' />
                    <div><Button type='dashed' style={{ marginLeft: '1rem' }} onClick={e => this.generateSubtitle(e)}>添加字幕</Button></div>
                    <Link
                        to={{
                            pathname: `/player/${this.state.name}`,
                            state: {
                                referer: this.props.location.pathname,
                                name: this.state.name,
                                url: this.state.url,
                                subtitle: this.state.subtitle
                            },
                        }}
                    >
                        <Button type='primary' style={{ marginLeft: '1rem' }}>确认</Button>
                    </Link>
                    <hr />
                    <textarea style={{ padding: '.3rem', width: 'calc(100% - 2rem)', marginLeft: '1rem' }} rows='5' type="text" name="base64" id="base64" onChange={e => this.handleBase64Change(e)} placeholder='需要加密的内容' />
                    <div style={{ margin: '1rem', wordBreak: 'break-all' }}>{this.state.base64}</div>
                </Content>
                <Foot />
            </Layout>
        </>
    }
}
export default Input