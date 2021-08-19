import { Layout, Row, Col, Input } from 'antd';
import { Head, Foot } from '../components/HeadFoot';
import { React, Component } from 'react';
import { encrypt, randomStr } from '../app';
const { Content } = Layout;
const { TextArea } = Input
class Test extends Component {
    constructor(props) {
        super(props)
        this.state = {
            link: '',
            username: '',
            start: '',
            end: '',
            text: ''
        }
    }
    generate() {
        const obj = {
            name: this.state.username,
            start: this.state.start,
            end: this.state.end,
            text: this.state.text
        }
        const key = randomStr(1).toUpperCase()
        this.setState({ link: `${window.location.origin}${window.location.pathname}#/?s=${key}!${encrypt(JSON.stringify(obj), key)}` })
    }
    handleNameChange = (event) => {
        this.setState({ username: event.target.value })
        this.generate()
    }
    handleStartChange = (event) => {
        this.setState({ start: event.target.value })
        this.generate()
    }
    handleEndChange = (event) => {
        this.setState({ end: event.target.value })
        this.generate()
    }
    textChange = event => {
        this.setState({ text: event.target.value })
        this.generate()
    }
    render() {
        return <Layout>
            <Head></Head>
            <Content>
                <Row>
                    <Col xs={{ span: 22, offset: 1 }}
                        sm={{ span: 22, offset: 1 }}
                        md={{ span: 24, offset: 0 }}
                        xl={{ span: 18, offset: 3 }}>
                        <Input style={{ margin: '0.5em 0' }} type='text' placeholder='名称' onChange={this.handleNameChange} />
                        <Input style={{ margin: '0.5em 0' }} type='text' placeholder='开始时间' onChange={this.handleStartChange} />
                        <Input style={{ margin: '0.5em 0' }} type='text' placeholder='结束时间' onChange={this.handleEndChange} />
                        <TextArea style={{ margin: '0.5em 0' }} rows={2} value={this.state.text} placeholder='留言内容' onChange={this.textChange} />
                        <TextArea style={{ margin: '0.5em 0' }} rows={4} value={this.state.link} placeholder='结果' readOnly />
                        <div style={{ wordBreak: 'break-all' }}><a href={this.state.link}>{this.state.link}</a></div>
                    </Col>
                </Row>
            </Content>
            <Foot></Foot>
        </Layout >
    }
}
export default Test