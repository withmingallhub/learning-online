import react from "react";
import "./index.css";
import PreviewSwiperFade from "./preview-swiper-fade/index";
import PreviewSwiperSlide from "./preview-swiper-slide/index";
import PreviewSwiperCube from "./preview-swiper-cube/index";
import PreviewSwiperFlip from "./preview-swiper-flip/index";
import PreviewSwiperCoverflow from "./preview-swiper-coverflow/index";
import ControlAnimation from "./controller/index";
import { SwiperAttr, PaginationAttr } from "./types";

interface AnimationProps {
  paginationArr?: PaginationAttr[];
  swiperAttr?: SwiperAttr;
}
interface AnimationState {
  display: boolean;
  paginationArr: PaginationAttr[];
  pagination: PaginationAttr;
  swiperAttr: SwiperAttr;
  paginationKey: string;
}

class Animation extends react.Component<AnimationProps, AnimationState> {
  private isUpdate = true;
  constructor(prop: AnimationProps) {
    super(prop);
    this.state = {
      display: false,
      paginationArr: [
        {
          color: "#CA4040",
        },
        {
          color: "#FF8604",
        },
      ],
      pagination: {
        color: "white",
      },
      swiperAttr: {
        type: "slide",
      },
      paginationKey: "0",
    };
  }

  componentDidMount() {
    const { paginationArr, swiperAttr } = this.props;
    if (paginationArr)
      this.setState({
        paginationArr,
      });
    if (swiperAttr)
      this.setState({
        swiperAttr,
      });
  }

  getSwiperArr(paginationArr) {
    this.setState({
      paginationArr: paginationArr,
    });
  }

  swiperGetKey(key) {
    this.setState({
      paginationKey: key,
    });
  }

  getSwiperAttr(e) {
    this.setState({
      swiperAttr: e,
    });
    console.log(e);
  }

  render() {
    const { swiperAttr } = this.state;
    return (
      <div className="animation-main">
        {swiperAttr.type === "fade" && (
          <PreviewSwiperFade
            paginationArr={this.state.paginationArr}
            swiperAttr={this.state.swiperAttr}
            swiperGetKey={(e) => this.swiperGetKey(e)}
          />
        )}
        {swiperAttr.type === "slide" && (
          <PreviewSwiperSlide
            paginationArr={this.state.paginationArr}
            swiperAttr={this.state.swiperAttr}
            swiperGetKey={(e) => this.swiperGetKey(e)}
          />
        )}
        {swiperAttr.type === "coverflow" && (
          <PreviewSwiperCoverflow
            paginationArr={this.state.paginationArr}
            swiperAttr={this.state.swiperAttr}
            swiperGetKey={(e) => this.swiperGetKey(e)}
          />
        )}
        {swiperAttr.type === "flip" && (
          <PreviewSwiperFlip
            paginationArr={this.state.paginationArr}
            swiperAttr={this.state.swiperAttr}
            swiperGetKey={(e) => this.swiperGetKey(e)}
          />
        )}
        {swiperAttr.type === "cube" && (
          <PreviewSwiperCube
            paginationArr={this.state.paginationArr}
            swiperAttr={this.state.swiperAttr}
            swiperGetKey={(e) => this.swiperGetKey(e)}
          />
        )}
        <ControlAnimation
          swiperAttr={this.state.swiperAttr}
          paginationKey={this.state.paginationKey}
          getSwiperArr={(e) => this.getSwiperArr(e)}
          getSwiperAttr={(e) => this.getSwiperAttr(e)}
        />
      </div>
    );
  }
}

export default Animation;
