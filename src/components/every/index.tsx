import react from "react";
import "./index.css";
import Child from "./child";

class Every extends react.Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.child.childFunction();
  }

  child: any = {};

  onRef = (ref: any) => {
    this.child = ref;
  };

  render() {
    return (
      <div className="every">
        <Child ref={this.onRef} />
      </div>
    );
  }
}

export default Every;
