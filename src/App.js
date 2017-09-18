import React, { Component } from 'react';
import './App.css';
import {Input,Button,Menu, Dropdown, Icon} from 'antd'

const menu= (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer /">1st menu item</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer /">2nd menu item</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer /">3d menu item</a>
    </Menu.Item>
  </Menu>
);


class App extends Component {
  render() {
    return (
    	<div className="box">
    			<div className="header">
    			<span ><Icon type="left" /></span>
    					爱慕故事
    			<div>
    				<Dropdown overlay={menu}>
						    <a className="ant-dropdown-link" href="#">
						    <Icon type="ellipsis" />
						    </a>
						  </Dropdown>
    			</div>
    			</div>
    			<div className="banner">
    				<li className="list-one">爱慕故事
    			</li>
    				<li>
    				<Dropdown overlay={menu}>
						    <a className="ant-dropdown-link" href="#">企业动态
						    <Icon type="none" />
						    </a>
						  </Dropdown>
						  </li>
    				<li>
    				<Dropdown overlay={menu}>
						    <a className="ant-dropdown-link" href="#">社会责任报告
						    <Icon type="none" />
						    </a>
						  </Dropdown>
						  </li>
    			</div>
			</div>
		    )
		  }
}

export default App;
