import 'react-native-gesture-handler';
import React from 'react';
import Navigation from './Navigation/Navigation';
import { Provider } from 'react-redux';
import Store from './Store/configureStore'
import LoginScreen from './Components/LoginScreen';

export default function App() {
  return (
    <Provider store={Store}>
      <Navigation/>
    </Provider>
    // <LoginScreen/>
  );
}