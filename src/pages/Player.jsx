import { Layout } from "antd";
import { Head, Foot } from "../components/HeadFoot";
import { React, Component } from "react";
import { DPlayer} from "@alitajs/react-dplayer";
const { Content } = Layout;
class Player extends Component {
  state = {
    name: this.props.match.params.name,
  };
  render() {
    return (
      <>
        <Layout>
          <Head />
          <Content>
            <DPlayer
              options={{
                video: {
                  url: "https://ssyatelandisi.gitlab.io/doraemon/source.m3u8",
                },
              }}
            />
          </Content>
          <Foot />
        </Layout>
      </>
    );
  }
}
export default Player;
