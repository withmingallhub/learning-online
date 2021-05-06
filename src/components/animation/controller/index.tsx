import react from "react";
import BraftEditor from "braft-editor";
import "braft-editor/dist/index.css";
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
      paginationArr: [
        {
          color: "#CA4040",
          editorState: BraftEditor.createEditorState(null),
          htmlContent: "",
        },
        {
          color: "#FF8604",
          editorState: BraftEditor.createEditorState(null),
          htmlContent: "",
        },
      ],
    };
  }

  async componentDidMount() {
    const { paginationArr, paginationKey } = this.props;
    var paginationArrState = this.state.paginationArr;

    // 假设此处从服务端获取html格式的编辑器内容
    // const htmlContent = await fetchEditorContent();
    // 使用BraftEditor.createEditorState将html字符串转换为编辑器需要的editorStat
    if (paginationArr[paginationKey].htmlContent) {
      paginationArrState[
        paginationKey
      ].editorState = BraftEditor.createEditorState(
        this.state.paginationArr[paginationKey].htmlContent
      );
      this.setState({
        paginationArr: paginationArrState,
      });
    }
    this.setState({
      paginationArr,
    });
  }

  handleEditorChange = (editorState) => {
    const { paginationKey } = this.props;

    var paginationArrState = this.state.paginationArr;
    paginationArrState[paginationKey].htmlContent = editorState.toHTML();
    paginationArrState[paginationKey].editorState = editorState;
    this.setState({ paginationArr: paginationArrState }, () =>
      this.props.getSwiperArr(paginationArrState)
    );
  };

  color(color) {
    const { paginationArr } = this.state;
    const { paginationKey } = this.props;
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
    const { swiperAttrDisplay, paginationArr } = this.state;
    const { swiperAttr, paginationKey } = this.props;
    console.log(paginationArr[paginationKey].htmlContent);
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
        <BraftEditor
          style={{ border: "1px solid black" }}
          imageResizable={true}
          value={paginationArr[paginationKey].editorState}
          onSave={this.handleEditorChange}
        />
      </div>
    );
  }
}

export default ControlAnimation;
