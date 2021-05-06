import react from "react";
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
import "braft-editor/dist/output.css";
import { SwiperAttr, PaginationAttr } from "../types";

interface PreviewSwiperFlipProps {
  paginationKey: string;
  paginationArr: PaginationAttr[];
  swiperAttr: SwiperAttr;
  swiperGetKey: (e) => void;
}
interface PreviewSwiperFlipState {}

class PreviewSwiperFlip extends react.Component<
  PreviewSwiperFlipProps,
  PreviewSwiperFlipState
> {
  private swiper: any;
  constructor(prop: PreviewSwiperFlipProps) {
    super(prop);
    this.state = {};
  }

  componentDidMount() {
    this.initSwiper();
  }

  initSwiper() {
    const that = this;
    this.swiper = new Swiper("#swiper-container-main", {
      grabCursor: true, // 鼠标移上去的图案
      observer: true,
      observeParents: true,
      loopPreventsSlide: false,

      effect: "flip", //切换效果
      // speed: 1000, // 切换速度

      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },

      onSlideChangeEnd: function(swiper) {
        swiper.update();
        swiper.startAutoplay();
        swiper.reLoop();
      },

      on: {
        // 切换的时候触发
        slideChangeTransitionStart: function() {
          that.props.swiperGetKey(this.activeIndex);
        },
      },
    });
  }

  swiperButton() {
    return (
      <>
        <div className="swiper-button-prev" />
        <div className="swiper-button-next" />
      </>
    );
  }

  renderSwiperPagination() {
    const { paginationArr } = this.props;
    console.log(this.props);
    return (
      <>{paginationArr.map((node, index) => this.getSwiperInfo(node, index))}</>
    );
  }

  getSwiperInfo(paginationInfo, key) {
    const { color } = paginationInfo;
    console.log(this.props);
    return (
      <div
        className="swiper-slide"
        style={{
          backgroundColor: color,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        key={key}
      >
        <div
          style={{
            height: "90%",
            width: "80%",
            border: "1px solid black",
          }}
        >
          <div
            className="braft-output-content"
            dangerouslySetInnerHTML={{
              __html: this.props.paginationArr[this.props.paginationKey]
                .htmlContent,
            }}
          />
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <div
          className="swiper-container"
          id="swiper-container-main"
          style={{ height: "35vw", width: "100vw" }}
        >
          <div className="swiper-wrapper">{this.renderSwiperPagination()}</div>
          <div className="swiper-pagination" />
        </div>
      </div>
    );
  }
}

export default PreviewSwiperFlip;
