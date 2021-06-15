import { Component } from "react";
import { SpecialDay } from "../components/SpecialDay";
class Test extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [1, 2, 3, 4],
            duanwu: true
        }
    }
    render() {
        if (this.state.duanwu)
            return <><SpecialDay data="ElKWgbQTUsrFOqjOBbq159/HSaGu5Tdm5anjibOSW0qnVOLSdtbBDbeX4/jIfIDWa+6zIebNhRR55ijBOfvBK8W2Ws9T+n4go3i9OPRdZ57UiP8LfrE0IKug3dVpucaE" /></>
        else
            return <></>
    }
}
export default Test