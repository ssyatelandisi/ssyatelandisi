import { Component } from "react"
import "./SpecialDay.scss"
import DPlayer from "react-dplayer"
import { CloseCircleTwoTone } from '@ant-design/icons'
class SpecialDay extends Component {
    constructor(props) {
        super(props)
        var info = false
        try {
            const json_string = new Buffer.from(this.props.data, 'base64').toString()
            const json_obj = JSON.parse(json_string)
            const Now = new Date()
            if (Now >= new Date(json_obj.start_date) && Now < new Date(json_obj.end_date))
                info = json_obj.name
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
                        url: 'https://cdn.jsdelivr.net/gh/ssyatelandisi/happybirthday@main/HappyBirthday.mp4'
                    }
                }}></DPlayer>
                <CloseCircleTwoTone id="close" style={{ fontSize: '24px' }} onClick={this.hide.bind(this)} />
            </div>
            </>
        }
        else
            return null
    }
    hide() {
        this.setState({
            specialday: false
        })
        // sessionStorage.setItem("specialday", "false")
    }
}
export { SpecialDay }