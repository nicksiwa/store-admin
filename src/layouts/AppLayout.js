import React from 'react';
import { Layout } from 'antd';
import { Link } from 'react-router-dom';
import AppRoute from '../routes/AppRoute';
import SidebarContainer from '../containers/shares/SidebarContainer';
import { APP_ROUTE } from '../constants';

function AppLayout() {
  return (
    <Layout>
      <Layout.Sider width={300}>
        <div>
          <Link to={APP_ROUTE.MAIN.INDEX}>Logo</Link>
        </div>
        <SidebarContainer />
      </Layout.Sider>
      <Layout.Content>
        <AppRoute />
      </Layout.Content>
    </Layout>
  );
}

export default AppLayout;
