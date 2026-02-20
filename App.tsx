import React from 'react'
import { AppNavigator } from './src/navigation/AppNavigator'
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './src/config/queryClient';

export const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <AppNavigator />
      </QueryClientProvider>
    </Provider>
  )
}