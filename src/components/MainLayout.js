import React from 'react';
import { Outlet } from 'react-router';
import styled from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';

// Define styled components for layout
const MainLayoutRoot = styled('div')(({ theme }) => ({
  overflow: 'hidden',
}));

const MainLayoutWrapper = styled('div')({
  display: 'flex',
  flex: 'auto',
  overflow: 'hidden',
});

const MainLayoutContainer = styled('div')({
  display: 'flex',
  flex: 'auto',
  overflow: 'hidden',
});

const MainLayoutContent = styled('div')({
  flex: 'auto',
  height: '100%',
  overflow: 'auto',
});

// Define MainLayout component
const MainLayout = () => (
  <MainLayoutRoot>
      <Navbar /> 

    <MainLayoutWrapper>

      <MainLayoutContainer>
        <MainLayoutContent>
          <Outlet /> 
        </MainLayoutContent>
      </MainLayoutContainer>
    </MainLayoutWrapper>
    <Footer/>
  </MainLayoutRoot>
);

export default MainLayout;