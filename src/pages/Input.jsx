import { Component } from "react";
import { Layout, Button } from "antd";
import { Link } from "react-router-dom";
import { Head, Foot } from "../components/HeadFoot";
import { decrypt, encrypt, randomStr } from "../app.js";
const { Content } = Layout;
class Input extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '播放器',
            url: '',
            subtitle: '',
            base64: '',
            vipjx: window.location.origin
        }
    }
    handleUrlChange(event) {
        const base_buf = event.target.value.split('.')
        const results = []
        for (let kbuf of base_buf) {
            let [key, content] = kbuf.split('!')
            const dec = decrypt(content, key)
            results.push(new Buffer.from(dec).toString())
        }
        this.setState({ url: results[1] })
        if (results.length > 1) {
            fetch(results[2]).then(res => res.text()).then(res => {
                this.setState({ subtitle: URL.createObjectURL(new Blob([res], { "type": "text/vtt" })) })
            })
        }
        console.clear()
        console.log(this.state.url);
    }
    handleBase64Change(event) {
        const key = randomStr(5)
        const enc = encrypt(event.target.value, key)
        this.setState({
            base64: key + '!' + enc,
            url: event.target.value
        })
    }
    handleSubtitleChange(event) {
        sessionStorage.setItem("subtitle", event.target.value)
    }
    handleM3u8Change(event) {
        sessionStorage.setItem("m3u8", event.target.value)
    }
    handleVipJxChange(event) {
        this.setState({ vipjx: event.target.value })
    }
    generateSubtitle(event) {
        if (sessionStorage.getItem("subtitle")) {
            const blob = new Blob([sessionStorage.getItem("subtitle")], { "type": "text/vtt;charset=utf-8" })
            this.setState({
                subtitle: URL.createObjectURL(blob)
            })
        }
    }
    generateM3u8(event) {
        if (sessionStorage.getItem("m3u8")) {
            const blob = new Blob([sessionStorage.getItem("m3u8")], { "type": "application/vnd.apple.mpegurl" })
            this.setState({
                url: URL.createObjectURL(blob)
            })
        }
        this.generateSubtitle()
    }
    render() {
        return <>
            <Layout>
                <Head />
                <Content>
                    <div style={{ marginLeft: '1rem' }} ><label htmlFor="url">播放地址：</label></div>
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
                                subtitle: this.state.subtitle,
                                type: 'auto'
                            },
                        }}
                    >
                        <Button type='primary' style={{ marginLeft: '1rem' }}>确认</Button>
                    </Link>
                    <hr />
                    <textarea style={{ padding: '.3rem', width: 'calc(100% - 2rem)', marginLeft: '1rem' }} rows='5' type="text" name="base64" id="base64" onChange={e => this.handleBase64Change(e)} placeholder='需要加密的内容' />
                    <div style={{ margin: '1rem', wordBreak: 'break-all' }}><code>{this.state.base64}</code></div>
                    <hr />
                    <div style={{ margin: '1rem', wordBreak: 'break-all' }}><Link to={{ pathname: `/iplayer/${this.state.base64}` }}>{window.location.origin}{window.location.pathname}#/iplayer/{this.state.base64}</Link></div>
                    <hr />
                    <textarea style={{ padding: '.3rem', width: 'calc(100% - 2rem)', marginLeft: '1rem' }} rows='5' type="text" name="m3u8" onChange={e => this.handleM3u8Change(e)} placeholder='m3u8内容' />
                    <textarea style={{ padding: '.3rem', width: 'calc(100% - 2rem)', marginLeft: '1rem' }} rows='5' type="text" name="subtitle" onChange={e => this.handleSubtitleChange(e)} placeholder='可选，vtt字幕内容' />
                    <div><Button type='dashed' style={{ marginLeft: '1rem' }} onClick={e => this.generateM3u8(e)}>确认输入</Button></div>
                    <Link
                        to={{
                            pathname: `/player/${this.state.name}`,
                            state: {
                                referer: this.props.location.pathname,
                                name: this.state.name,
                                url: this.state.url,
                                subtitle: this.state.subtitle,
                                type: 'hls'
                            },
                        }}
                    >
                        <Button type='primary' style={{ marginLeft: '1rem' }}>播放</Button>
                    </Link>
                    <hr />
                    <h1 style={{ margin: '1rem' }}>VIP解析</h1>
                    <textarea style={{ padding: '.3rem', width: 'calc(100% - 2rem)', marginLeft: '1rem' }} rows='5' type="text" name="vipjx" id="vipjx" onChange={e => this.handleVipJxChange(e)} placeholder='常规视频网站播放页面网址' />
                    <a href={`${window.location.origin}${window.location.pathname}#jx?url=${this.state.vipjx}`}>
                        <Button type='primary' style={{ marginLeft: '1rem' }}>VIP解析</Button>
                    </a>
                </Content>
                <Foot />
            </Layout>
        </>
    }
}
export default Input