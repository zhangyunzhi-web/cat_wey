import React, { memo } from 'react'
import { Layout } from 'antd';
const { Sider, Content } = Layout;
import LeftMenu from './components/leftMenu';


const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#108ee9',
};

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
        <Content style={contentStyle}>Content</Content>
      </Layout>
    </Layout >
  )
})


export default zLayout
