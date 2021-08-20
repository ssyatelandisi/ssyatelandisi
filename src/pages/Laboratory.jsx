import { Component } from 'react';
import { Layout, Button, Row, Col, Input } from 'antd';
import { Link } from 'react-router-dom';
import { Head, Foot } from '../components/HeadFoot';
import { decrypt, encrypt, randomStr } from '../app.js';
const { Content } = Layout;
const { TextArea } = Input;
class Laboratory extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '播放器',
            subtitle: '',
            base64: '',
            enc: '',
            key: '',
            encdata: '',
            decdata: '',
            vipjx: window.location.origin
        }
    }
    handleEncChange(event) {
        console.log(event.target.value);
        const base_buf = event.target.value.split('.')
        const results = []
        for (let kbuf of base_buf) {
            let [key, content] = kbuf.split('!')
            const dec = decrypt(content, key)
            results.push(new Buffer.from(dec).toString())
        }
        this.setState({ decdata: results[0] })
        if (results.length > 1) {
            fetch(results[1]).then(res => res.text()).then(res => {
                this.setState({ subtitle: URL.createObjectURL(new Blob([res], { 'type': 'text/vtt' })) })
            })
        }
    }
    handleBase64Change(event) {
        const key = randomStr(5)
        const enc = encrypt(event.target.value, key)
        this.setState({
            base64: enc.length > 0 ? key + '!' + enc : '',
            enc,
            key: enc.length > 0 ? key : '',
            decdata: event.target.value
        })
    }
    handleSubtitleChange(event) {
        sessionStorage.setItem('subtitle', event.target.value)
    }
    handleM3u8Change(event) {
        sessionStorage.setItem('m3u8', event.target.value)
    }
    handleVipJxChange(event) {
        this.setState({ vipjx: event.target.value })
    }
    generateSubtitle(event) {
        if (sessionStorage.getItem('subtitle')) {
            const blob = new Blob([sessionStorage.getItem('subtitle')], { 'type': 'text/vtt;charset=utf-8' })
            this.setState({
                subtitle: URL.createObjectURL(blob)
            })
        }
    }
    generateM3u8(event) {
        if (sessionStorage.getItem('m3u8')) {
            const blob = new Blob([sessionStorage.getItem('m3u8')], { 'type': 'application/vnd.apple.mpegurl' })
            this.setState({
                decdata: URL.createObjectURL(blob)
            })
        }
        this.generateSubtitle()
    }
    render() {
        return <>
            <Layout>
                <Head />
                <Content>
                    <Row>
                        <Col xs={{ span: 22, offset: 1 }}
                            sm={{ span: 22, offset: 1 }}
                            md={{ span: 22, offset: 1 }}
                            xl={{ span: 18, offset: 3 }}>
                            <h1>解密数据</h1>
                            <TextArea rows='4' onChange={e => this.handleEncChange(e)} placeholder='已经加密的内容' />
                            <div id='encdata' style={{ margin: '0.5em 0', wordBreak: 'break-all', display: 'none' }}><code>{this.state.decdata}</code></div>
                            <Link
                                to={{
                                    pathname: `/player/${this.state.name}`,
                                    state: {
                                        referer: this.props.location.pathname,
                                        name: this.state.name,
                                        url: this.state.decdata,
                                        subtitle: this.state.subtitle,
                                        type: 'auto'
                                    },
                                }}
                            >
                                <Button type='primary'>确认播放</Button>
                            </Link>
                            <h1>加密数据</h1>
                            <TextArea rows='4' type='text' name='base64' id='base64' onChange={e => this.handleBase64Change(e)} placeholder='需要加密的内容' />
                            <div style={{ margin: '0.5em 0', wordBreak: 'break-all' }}><code>{this.state.base64}</code></div>
                            <div style={{ margin: '0.5em 0', wordBreak: 'break-all', border: '1px solid #ccc' }}><Link to={{ pathname: `/iplayer/${this.state.base64}` }}>{window.location.origin}{window.location.pathname}#/iplayer/{this.state.base64}</Link></div>
                            <div style={{ margin: '0.5em 0', wordBreak: 'break-all', border: '1px solid #ccc' }}><Link to={{ pathname: `/iframe/${this.state.base64}` }}>{window.location.origin}{window.location.pathname}#/iframe/{this.state.base64}</Link></div>
                            <div style={{ margin: '0.5em 0', wordBreak: 'break-all', border: '1px solid #ccc' }}>链接：<Link to={{ pathname: `/iframe/${this.state.enc}` }}>{window.location.origin}{window.location.pathname}#/iframe/{this.state.enc}</Link><br />密码：{this.state.key}</div>
                            <h1 >m3u8内容播放器</h1>
                            <TextArea rows='4' onChange={e => this.handleM3u8Change(e)} placeholder='m3u8内容' />
                            <TextArea rows='4' onChange={e => this.handleSubtitleChange(e)} placeholder='可选，vtt字幕内容' />
                            <Button type='default' onClick={e => this.generateM3u8(e)}>确认输入</Button>
                            <Link
                                to={{
                                    pathname: `/player/${this.state.name}`,
                                    state: {
                                        referer: this.props.location.pathname,
                                        name: this.state.name,
                                        url: this.state.decdata,
                                        subtitle: this.state.subtitle,
                                        type: 'hls'
                                    },
                                }}
                            >
                                <Button type='primary'>播放</Button>
                            </Link>
                            <h1>VIP解析</h1>
                            <TextArea rows='4' onChange={e => this.handleVipJxChange(e)} placeholder='常规视频网站播放页面网址' />
                            <a href={`${window.location.origin}${window.location.pathname}#jx?url=${this.state.vipjx}`}>
                                <Button type='primary'>VIP解析</Button>
                            </a>
                            <div style={{ marginTop: '1em' }}>
                                <Button shape='round' onClick={() => this.props.history.goBack()}>返回</Button>
                            </div>
                        </Col>
                    </Row>
                </Content>
                <Foot />
            </Layout>
        </>
    }
}
export default Laboratory