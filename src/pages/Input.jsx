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
            url: ''
        }

    }
    handleUrlChange(event) {
        this.setState({ url: event.target.value })
    }
    render() {
        return <>
            <Layout><Content>
                <Head />
                <div style={{ marginLeft: '1rem' }} ><label htmlFor="name">播放地址：</label></div>
                <textarea style={{ padding: '.3rem', width: 'calc(100% - 2rem)', marginLeft: '1rem' }} rows='5' type="text" name="url" id="url" onChange={e => this.handleUrlChange(e)} />
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
                <Foot />
            </Content></Layout>
        </>
    }
}
export default Input