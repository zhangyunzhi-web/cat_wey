import React, { Suspense, memo } from 'react'
import { Layout } from 'antd';
const { Sider } = Layout;
import LeftMenu from './components/leftMenu';

import { useRoutes } from 'react-router-dom';
import routes from '@renderer/router';
import { MainContainer } from './style'



const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#3ba0e9',
  height: '100vh'
};

const zLayout = memo(() => {
  return (
    <Layout>
      <Sider style={siderStyle}><LeftMenu></LeftMenu></Sider>
      <Layout>
        {/* <Content style={contentStyle}><Turnplate></Turnplate></Content> */}

        <Suspense fallback="">
          <MainContainer>{useRoutes(routes)}</MainContainer>
        </Suspense>
      </Layout>
    </Layout >
  )
})


export default zLayout
