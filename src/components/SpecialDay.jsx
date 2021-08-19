import { Component } from "react"
import "./SpecialDay.scss"
import { decrypt } from "../app"
import DPlayer from "react-dplayer"
import { CloseCircleTwoTone } from '@ant-design/icons'
class SpecialDay extends Component {
    constructor(props) {
        super(props)
        try {
            const [key, content] = this.props.data.split('!')
            const json_obj = JSON.parse(decrypt(content, key))
            const Now = new Date()
            if (Now >= new Date(json_obj.start) && Now < new Date(json_obj.end)) {
                this.state = {
                    specialday: true,//调试控制
                    userName: json_obj.name,
                    text: json_obj.text.replace(/\\n/g, '<br/>')
                }
            }

        } catch (error) {
            this.state = {
                specialday: false,//调试控制
            }
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
                <div style={{ textAlign: "center", paddingTop: "10px", paddingBottom: "10px", wordBreak: 'break-all' }} dangerouslySetInnerHTML={{ __html: this.state.text }}></div>
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
    }
}
export { SpecialDay }