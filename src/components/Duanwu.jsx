import zongzi from "./zongzi.gif"
import { Component } from "react"
class Duanwu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            duanwu: sessionStorage.getItem("duanwu") !== "false" ? true : false
        }
    }
    render() {
        if (this.state.duanwu)
            return <><div id="duanwu" onClick={this.hide.bind(this)} style={{
                backgroundImage: `url(${zongzi})`,
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundColor: "#4bb38263",
                backgroundClip: "content-box",
                border: "10px solid #4bb38263",
                borderRadius: " 5px",
                width: "420px",
                height: "220px",
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translateX(-50%) translateY(-50%)",
                zIndex: 99
            }}></div></>
        else
            return null
    }
    hide() {
        this.setState({
            duanwu: false
        })
        sessionStorage.setItem("duanwu", "false")
    }
}
export { Duanwu }