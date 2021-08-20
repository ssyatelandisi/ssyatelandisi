import { Layout, Row, Col, Input, Button } from 'antd';
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
    generate = () => {
        const obj = {
            name: this.state.username,
            start: this.state.start,
            end: this.state.end,
            text: this.state.text
        }
        const key = randomStr(1).toUpperCase()
        const link = `${window.location.origin}${window.location.pathname}#/?s=${key}!${encrypt(JSON.stringify(obj), key)}`
        this.setState({ link })
    }
    clear = () => {
        this.setState({
            username: '',
            start: '',
            end: '',
            text: '',
            link: ''
        })
    }
    handleNameChange = (event) => {
        this.setState({ username: event.target.value })
    }
    handleStartChange = (event) => {
        this.setState({ start: event.target.value })
    }
    handleEndChange = (event) => {
        this.setState({ end: event.target.value })
    }
    textChange = event => {
        this.setState({ text: event.target.value })
    }
    render() {
        return <Layout>
            <Head></Head>
            <Content>
                <Row>
                    <Col xs={{ span: 22, offset: 1 }}
                        sm={{ span: 22, offset: 1 }}
                        md={{ span: 22, offset: 1 }}
                        xl={{ span: 18, offset: 3 }}>
                        <Input style={{ margin: '0.5em 0' }} type='text' value={this.state.username} placeholder='名称' onChange={this.handleNameChange} />
                        <Input style={{ margin: '0.5em 0' }} type='text' value={this.state.start} placeholder='开始时间' onChange={this.handleStartChange} />
                        <Input style={{ margin: '0.5em 0' }} type='text' value={this.state.end} placeholder='结束时间' onChange={this.handleEndChange} />
                        <TextArea style={{ margin: '0.5em 0' }} rows={2} value={this.state.text} placeholder='留言内容' onChange={this.textChange} />
                        <Row gutter={8}>
                            <Col span={12}><Button type='primary' block onClick={this.generate}>确认</Button></Col>
                            <Col span={12}><Button type='dashed' block onClick={this.clear}>清空</Button></Col>
                        </Row>
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