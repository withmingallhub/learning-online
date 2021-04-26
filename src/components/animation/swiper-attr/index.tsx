import react from "react";
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
import { Card, Select, Button } from "antd";
import { SwiperAttr } from "../types";

import "./index.css";
const Option = Select.Option;

interface SwiperMainAttrProps {
  swiperAttr: SwiperAttr;
  ok: (e) => void;
}

interface SwiperMainAttrState {
  swiperAttr: SwiperAttr;
}

export default class SwiperMainAttr extends react.Component<
  SwiperMainAttrProps,
  SwiperMainAttrState
> {
  private swiperSlide: any;
  private swiperFade: any;
  private swiperCube: any;
  private swiperCoverflow: any;
  private swiperFlip: any;
  constructor(prop: SwiperMainAttrProps) {
    super(prop);
    this.state = {
      swiperAttr: {
        type: "slide",
      },
    };
  }

  componentDidMount() {
    const { swiperAttr } = this.props;
    this.setState({
      swiperAttr: swiperAttr,
    });

    this.swiperSlide = new Swiper("#swiper-container-slide", {
      observeParents: true,
      loopPreventsSlide: false,
      effect: "slide", //切换效果
    });

    this.swiperFade = new Swiper("#swiper-container-fade", {
      observeParents: true,
      loopPreventsSlide: false,
      effect: "fade", //切换效果
    });

    this.swiperCube = new Swiper("#swiper-container-cube", {
      observeParents: true,
      loopPreventsSlide: false,
      effect: "cube", //切换效果
    });

    this.swiperCoverflow = new Swiper("#swiper-container-coverflow", {
      observeParents: true,
      loopPreventsSlide: false,
      effect: "coverflow",
    });

    this.swiperFlip = new Swiper("#swiper-container-flip", {
      observeParents: true,
      loopPreventsSlide: false,
      effect: "flip",
    });
  }

  toPreBack() {}

  attrOk() {
    this.props.ok(this.state.swiperAttr);
  }

  render() {
    const { swiperAttr } = this.state;
    return (
      <>
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Card bordered={false}>
            <div
              className="swiper-container"
              id="swiper-container-slide"
              style={{ height: "200px", width: "400px", marginBottom: "20px" }}
            >
              <div className="swiper-wrapper">
                <div
                  className="swiper-slide preview-swiper-paginagion"
                  style={{ backgroundColor: "#4390EE" }}
                >
                  位移切换 1
                </div>
                <div
                  className="swiper-slide preview-swiper-paginagion"
                  style={{ backgroundColor: "#CA4040" }}
                >
                  位移切换 2
                </div>
                <div
                  className="swiper-slide preview-swiper-paginagion"
                  style={{ backgroundColor: "#FF8604" }}
                >
                  位移切换 3
                </div>
              </div>
            </div>

            <div
              className="swiper-container"
              id="swiper-container-fade"
              style={{ height: "200px", width: "400px", marginBottom: "20px" }}
            >
              <div className="swiper-wrapper">
                <div
                  className="swiper-slide preview-swiper-paginagion"
                  style={{ backgroundColor: "#4390EE" }}
                >
                  淡入 1
                </div>
                <div
                  className="swiper-slide preview-swiper-paginagion"
                  style={{ backgroundColor: "#CA4040" }}
                >
                  淡入 2
                </div>
                <div
                  className="swiper-slide preview-swiper-paginagion"
                  style={{ backgroundColor: "#FF8604" }}
                >
                  淡入 3
                </div>
              </div>
            </div>

            <div
              className="swiper-container"
              id="swiper-container-cube"
              style={{ height: "200px", width: "400px", marginBottom: "20px" }}
            >
              <div className="swiper-wrapper">
                <div
                  className="swiper-slide preview-swiper-paginagion"
                  style={{ backgroundColor: "#4390EE" }}
                >
                  方块 1
                </div>
                <div
                  className="swiper-slide preview-swiper-paginagion"
                  style={{ backgroundColor: "#CA4040" }}
                >
                  方块 2
                </div>
                <div
                  className="swiper-slide preview-swiper-paginagion"
                  style={{ backgroundColor: "#FF8604" }}
                >
                  方块 3
                </div>
              </div>
            </div>

            <div
              className="swiper-container"
              id="swiper-container-coverflow"
              style={{ height: "200px", width: "400px", marginBottom: "20px" }}
            >
              <div className="swiper-wrapper">
                <div
                  className="swiper-slide preview-swiper-paginagion"
                  style={{ backgroundColor: "#4390EE" }}
                >
                  3D切换 1
                </div>
                <div
                  className="swiper-slide preview-swiper-paginagion"
                  style={{ backgroundColor: "#CA4040" }}
                >
                  3D切换 2
                </div>
                <div
                  className="swiper-slide preview-swiper-paginagion"
                  style={{ backgroundColor: "#FF8604" }}
                >
                  3D切换 3
                </div>
              </div>
            </div>

            <div
              className="swiper-container"
              id="swiper-container-flip"
              style={{ height: "200px", width: "400px", marginBottom: "20px" }}
            >
              <div className="swiper-wrapper">
                <div
                  className="swiper-slide preview-swiper-paginagion"
                  style={{ backgroundColor: "#4390EE" }}
                >
                  3D翻转 1
                </div>
                <div
                  className="swiper-slide preview-swiper-paginagion"
                  style={{ backgroundColor: "#CA4040" }}
                >
                  3D翻转 2
                </div>
                <div
                  className="swiper-slide preview-swiper-paginagion"
                  style={{ backgroundColor: "#FF8604" }}
                >
                  3D翻转 3
                </div>
              </div>
            </div>
            <Select
              defaultValue="slide"
              value={swiperAttr.type}
              style={{ width: 120 }}
              onChange={(e) => {
                const { swiperAttr } = this.state;
                swiperAttr.type = e;
                this.setState({
                  swiperAttr,
                });
              }}
            >
              <Option value="slide">位移切换</Option>
              <Option value="fade">淡入</Option>
              <Option value="cube">方块</Option>
              <Option value="coverflow">3D切换</Option>
              <Option value="flip">3D翻转</Option>
            </Select>
            <Button
              onClick={() => this.attrOk()}
              style={{ marginLeft: "30px" }}
            >
              选择
            </Button>
          </Card>
        </div>
      </>
    );
  }
}
