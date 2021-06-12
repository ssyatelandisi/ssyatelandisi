import { Component } from "react";
class Test extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [1, 2, 3, 4]
        }
    }
    render() {
        return <><ul>
            {this.state.data.map((v, i) => <li key={i}>{v}</li>)}
        </ul></>
    }
}
export default Test