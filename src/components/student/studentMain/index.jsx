import react from 'react';
import './index.css';
import {Card, Input} from 'antd';

class UserInfo extends react.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="userInfo">
        <Card style={{width: 500, height: 500, marginLeft: '100px', marginTop: '100px'}}>
          <p>1.样例一:已知一个直角三角形周长为12，一个直角边为3，斜边为5，求其面积</p>
          <p>提示1：算出两个直角边</p>
          <Input value="通过周长算出另一个直角边，在通过公式算出面积" />
        </Card>
      </div>
    );
  }
}

export default UserInfo;
