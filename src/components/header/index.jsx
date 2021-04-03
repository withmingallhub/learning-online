import React from 'react';
import {Link} from 'react-router-dom';
import './index.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  goProblom(e) {
    console.log(e);
    console.log('meiriyiti');
  }

  render() {
    return (
      <>
        <div className="titleFather">
          <Link style={{textDecoration: 'none'}} to={{pathname: '/teacher'}}>
            <li className="title">教师端</li>
          </Link>
          <Link style={{textDecoration: 'none'}} to={{pathname: '/studentMain'}}>
            <li className="title">学生端 </li>
          </Link>
          <Link style={{textDecoration: 'none'}} to={{pathname: '/login'}}>
            <div
              style={{
                height: '60px',
                width: '60px',
                borderRadius: '50%',
                backgroundColor: 'black',
                marginTop: '20px',
              }}
            ></div>
          </Link>
        </div>
      </>
    );
  }
}

export default Header;
