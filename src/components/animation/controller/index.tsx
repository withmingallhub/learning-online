import react from "react";
import SwiperMainAttr from "../swiper-attr/index";
import { Drawer, Button } from "antd";
import { SwiperAttr, PaginationAttr } from "../types";
import "./index.css";

interface ControlAnimationProps {
  getSwiperArr: (r) => void;
  getSwiperAttr: (e) => void;
  paginationKey: string;
  paginationArr?: PaginationAttr[];
  swiperAttr?: SwiperAttr;
}
interface ControlAnimationState {
  paginationKey: string;
  paginationArr: PaginationAttr[];
  swiperAttrDisplay: boolean;
}

class ControlAnimation extends react.Component<
  ControlAnimationProps,
  ControlAnimationState
> {
  constructor(prop: ControlAnimationProps) {
    super(prop);
    this.state = {
      swiperAttrDisplay: false,
      paginationKey: "0",
      paginationArr: [
        {
          color: "#4390EE",
        },
        {
          color: "#CA4040",
        },
        {
          color: "#FF8604",
        },
      ],
    };
  }

  componentDidMount() {}

  color(color) {
    const { paginationArr, paginationKey } = this.state;
    paginationArr[paginationKey].color = color;
    this.props.getSwiperArr(paginationArr);
  }

  swiperShow() {
    const { swiperAttrDisplay } = this.state;
    swiperAttrDisplay
      ? this.setState({
          swiperAttrDisplay: false,
        })
      : this.setState({
          swiperAttrDisplay: true,
        });
  }

  onSwiperAttrChange() {
    this.setState({
      swiperAttrDisplay: false,
    });
  }
  ok(e) {
    this.props.getSwiperAttr(e);
    this.setState({
      swiperAttrDisplay: false,
    });
  }

  render() {
    const { swiperAttrDisplay } = this.state;
    const { swiperAttr } = this.props;
    return (
      <div className="controller-animation">
        <Button type="primary" onClick={() => this.swiperShow()}>
          Open
        </Button>
        <Drawer
          title="幻灯片设置"
          placement="left"
          width="600"
          closable={false}
          onClose={() => this.onSwiperAttrChange()}
          visible={swiperAttrDisplay}
        >
          <SwiperMainAttr swiperAttr={swiperAttr} ok={(e) => this.ok(e)} />
        </Drawer>
      </div>
    );
  }
}

export default ControlAnimation;
