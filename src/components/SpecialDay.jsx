import { Component } from "react"
import "./SpecialDay.scss"
import DPlayer from "react-dplayer"
import { CloseCircleTwoTone } from '@ant-design/icons'
class SpecialDay extends Component {
    constructor(props) {
        super(props)
        var info = false
        try {
            const b64 = this.props.data.replace(/-/g, '+').replace(/_/g, '/')
            const json_enBuf = new Buffer.from(b64, 'base64')
            const json_deBuf = json_enBuf.map(i => i ^ 154)
            const json_obj = JSON.parse((new Buffer.from(json_deBuf)).toString('utf-8'))
            const Now = new Date()
            if (Now >= new Date(json_obj.start) && Now < new Date(json_obj.end)) { info = json_obj.name }
        } catch (error) {
            ;
        }
        this.state = {
            // specialday: sessionStorage.getItem("specialday") !== "false" ? true : false,//调试控制
            specialday: info !== false ? true : false,//调试控制
            json_obj: null,
            userName: info !== false ? info : null
        }
    }
    render() {
        if (this.state.specialday) {
            return <><div id="specialday">
                <h1 style={{ textAlign: "center" }}>{this.state.userName}</h1>
                <h1 style={{ textAlign: "center" }}>生日快乐</h1>
                <div style={{ width: "65px", height: "85px", margin: "0 auto" }}>
                    <div className="breeding-rhombus-spinner">
                        <div className="rhombus child-1"></div>
                        <div className="rhombus child-2"></div>
                        <div className="rhombus child-3"></div>
                        <div className="rhombus child-4"></div>
                        <div className="rhombus child-5"></div>
                        <div className="rhombus child-6"></div>
                        <div className="rhombus child-7"></div>
                        <div className="rhombus child-8"></div>
                        <div className="rhombus big"></div>
                    </div>
                </div>
                <DPlayer options={{
                    autoplay: true,
                    volume: 1.0,
                    hotkey: false,
                    video: {
                        url: 'https://cdn.jsdelivr.net/gh/ssyatelandisi/ssyatelandisi@master/public/Happybirthday.mp4'
                    }
                }}></DPlayer>
                <CloseCircleTwoTone id="close" style={{ fontSize: '24px' }} onClick={this.hide.bind(this)} />
                <div style={{ textAlign: "center", paddingTop: "10px", paddingBottom: "10px" }}>长秀发，涨薪资<br />不长岁月不长膘</div>
            </div>
            </>
        }
        else
            return <></>
    }
    hide() {
        this.setState({
            specialday: false
        })
        // sessionStorage.setItem("specialday", "false")
    }
}
export { SpecialDay }