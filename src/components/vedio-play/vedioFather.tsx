import react from "react";
import VedioPlay from "./index";
const vedio = require("../../vedio/test.mp4").default;

interface VedioFatherProps {}
interface VedioFatherState {}

class VedioFather extends react.Component<VedioFatherProps, VedioFatherState> {
  constructor(props: VedioFatherProps) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log("vedioUrl", vedio);
  }

  render() {
    return (
      <div>
        <VedioPlay url={vedio} id="vedio_1" width="1000px" />
      </div>
    );
  }
}

export default VedioFather;
