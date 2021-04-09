import react from "react";
import videojs from "video.js";

interface VedioPlayProps {
  url: string;
  id: any;
}
interface VedioPlayState {}

class VedioPlay extends react.Component<VedioPlayProps, VedioPlayState> {
  private player = null;
  constructor(props: VedioPlayProps) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.player = videojs(this.props.id, {
      autoplay: true, //播放器准备好之后，是否自动播放，默认false
      controls: false, //是否拥有控制条 ，默认true,如果设为false ,界面上不会出现任何控制按钮，那么只能通过api进行控制了
      //我设置的是false然后通过API和自定义控制台联动
      //height: 字符串或数字（字符串带单位）视频容器的高度，比如： height:300 or height:'300px'
      //width: 字符串或数字,视频容器的宽度, 单位像素
      //loop : true/false,视频播放结束后，是否循环播放
      muted: true, //是否静音
      //poster: 通常传入一个URL//播放前显示的视频画面，播放开始之后自动移除。
      //preload: 'auto'/ 'metadata' / 'none',预加载,auto-自动,metadata-元数据信息 ，比如视频长度，尺寸等,none-不预加载任何数据，直到用户开始播放才开始下载
      //notSupportedMessage: '此视频暂无法播放，检查相机状态是否正常或请查看是否安装flash',//无法播放时显示的信息
    });
    this.player.src({
      src: this.props.url,
    });
  }

  render() {
    return (
      <div>
        <video id="id" className="video-js vjs-default-skin" data-setup />
      </div>
    );
  }
}

export default VedioPlay;
