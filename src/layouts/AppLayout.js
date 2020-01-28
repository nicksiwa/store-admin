import React from 'react';
import { Layout } from 'antd';
import AppRoute from '../routes/AppRoute';
import SidebarContainer from '../containers/shares/SidebarContainer';

function AppLayout() {
  return (
    <Layout style={{ height: '100%' }}>
      <Layout.Sider width={300}>
        <SidebarContainer />
      </Layout.Sider>
      <Layout.Content>
        <AppRoute />
      </Layout.Content>
    </Layout>
  );
}

export default AppLayout;
