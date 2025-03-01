import React from 'react';

import { Slot } from 'expo-router';
import { AuthProvider } from './(auth)/authContext';
import TopNavBar from '../components/TopNavBar';

const Layout = () => {
  return (
    <AuthProvider>
      <TopNavBar />
      <Slot />
    </AuthProvider>
  );
};

export default Layout;
