import React, { Component } from 'react';
import '../style/App.css';
import { Route, Link } from 'react-router-dom';
import { Layout, Breadcrumb } from 'antd';
import Home from '../../home/containers/home';
import Header from '../components/header';
import Content from '../components/content';
import Footer from '../components/footer';

const App = () => {
  return (
    <div>
      <Layout className = "layout">
        <Header />
        <Content />
        <Footer />
      </Layout>
    </div>
  )
}

export default App;
