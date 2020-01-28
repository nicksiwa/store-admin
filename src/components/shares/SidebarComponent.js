import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { APP_ROUTE } from '../../constants';

function SidebarComponent() {
  return (
    <Menu mode="inline">
      <Menu.SubMenu
        key="sub1"
        title={
          <span>
            <Icon type="table" />
            <span>จัดการข้อมูล</span>
          </span>
        }
      >
        <Menu.Item key="product">
          <Icon type="shopping" />
          Product
        </Menu.Item>
        <Menu.Item key="category">
          <Icon type="appstore" />
          Category
        </Menu.Item>
        <Menu.Item key="tag">
          <Link to={APP_ROUTE.TAG.INDEX}>
            <Icon type="tags" />
            Tag
          </Link>
        </Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu
        key="sub2"
        title={
          <span>
            <Icon type="table" />
            <span>รายการสั่งซื้อสินค้า</span>
          </span>
        }
      >
        <Menu.Item key="product">
          <Icon type="shopping" />
          แสดงรายการสั่งซื้อสินค้า
        </Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );
}

export default SidebarComponent;
