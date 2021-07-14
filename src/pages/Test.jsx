import { Component } from "react"
class Test extends Component {
    constructor(props) {
        super(props)
        this.state = {
            link: '',
            username: '',
            start: '',
            end: ''
        }
    }
    generate() {
        const obj = {
            name: this.state.username,
            start: this.state.start,
            end: this.state.end
        }
        const buf = (new Buffer.from(JSON.stringify(obj), 'utf-8')).map(i => i ^ 154)
        const b64 = new Buffer.from(buf).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '')
        this.setState({ link: `${window.location.origin}${window.location.pathname}#/?s=${b64}` })
    }
    handleNameChange(event) {
        this.setState({ username: event.target.value })
    }
    handleStartChange(event) {
        this.setState({ start: event.target.value })
    }
    handleEndChange(event) {
        this.setState({ end: event.target.value })
    }
    render() {
        return <>
            <div style={{ marginLeft: '1rem' }} ><label htmlFor="name">名称</label></div>
            <input style={{ marginLeft: '1rem' }} type="text" name="name" id="name" onChange={e => this.handleNameChange(e)} />
            <hr />
            <div style={{ marginLeft: '1rem' }} ><label htmlFor="start">开始时间</label></div>
            <input style={{ marginLeft: '1rem' }} type="text" name="start" id="start" onChange={e => this.handleStartChange(e)} />
            <hr />
            <div style={{ marginLeft: '1rem' }} ><label htmlFor="end">结束时间</label></div>
            <input style={{ marginLeft: '1rem' }} type="text" name="end" id="end" onChange={e => this.handleEndChange(e)} />
            <hr />
            <button style={{ marginLeft: '1rem' }} onClick={e => this.generate(e)}>确认</button>
            <hr />
            <div style={{ padding: '0 1rem' }}><textarea style={{ minWidth: '100%' }} rows="7" value={this.state.link}></textarea></div>
            <div><a href={this.state.link}>{this.state.link}</a></div>
        </>
    }
}
export default Test