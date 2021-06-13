import { Component } from "react";
import { Duanwu } from "../components/Duanwu";
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
            return <><Duanwu /></>
        else
            return <></>
    }
}
export default Test