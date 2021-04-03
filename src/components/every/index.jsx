import react from 'react';
import './index.css';
import {Steps, Divider} from 'antd';
import {Card} from 'antd';
import {Radio} from 'antd';
import {Button} from 'antd';

const {Step} = Steps;

class Every extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }

  onChange = (current) => {
    console.log('onChange:', current);
    this.setState({current});
  };

  render() {
    const {current} = this.state;
    return (
      <div className="every" style={{marginTop: '30px'}}>
        <Card style={{width: 300}}>
          <Steps current={current} onChange={this.onChange} direction="vertical">
            <Step title="计算步骤一" description="This is a description." />
            <Step title="计算步骤五" description="This is a description." />
            <Step title="未选择" description="This is a description." />
          </Steps>
          <p>1.样例学习第一题</p>
          <p>
            <Radio>计算步骤七</Radio>
          </p>
          <p>
            <Radio>计算步骤八</Radio>
          </p>
          <p>
            <Radio>计算步骤九</Radio>
          </p>
          <div style={{width: '300px', height: '40px', display: 'flex', justifyContent: 'betwwen'}}>
            <Button type="primary" style={{marginLeft: '40px'}}>
              确认
            </Button>
            <Button danger style={{marginLeft: '35px'}}>
              关闭
            </Button>
          </div>
          <div style={{textAlign: 'center', color: '#1890ff'}}>
            <p>查看解题思路</p>
          </div>
        </Card>
      </div>
    );
  }
}

export default Every;
