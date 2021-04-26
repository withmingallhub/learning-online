import react from "react";
import Animation from "./index";

interface AnimationFatherProps {}
interface AnimationFatherState {}

class AnimationFather extends react.Component<
  AnimationFatherProps,
  AnimationFatherState
> {
  constructor(props: AnimationFatherProps) {
    super(props);
    this.state = {};
  }

  render() {
    return <Animation />;
  }
}

export default AnimationFather;
