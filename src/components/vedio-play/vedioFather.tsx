import react from "react";
// import testVedio from "../../vedio/test.mp4";
import VedioPlay from "./index";

interface VedioFatherProps {}
interface VedioFatherState {}

class VedioFather extends react.Component<VedioFatherProps, VedioFatherState> {
  constructor(props: VedioFatherProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <VedioFather url="../../vedio/test.mp4" id="1" />
      </div>
    );
  }
}

export default VedioFather;
