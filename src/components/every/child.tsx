import react from "react";

export default class Child extends react.Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  childFunction() {
    console.log("diaoyongdao");
  }

  render() {
    return <div>aaaa</div>;
  }
}
