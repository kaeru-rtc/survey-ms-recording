import React from 'react';
import './App.css';

import AppHeader from './libs/app-header'
import AppMain from './libs/app-main'
import AppFooter from './libs/app-footer'

import MainStore from './store/main'

const mainStore = new MainStore()


function App() {
  return (
    <div className="App">
      <header>
        <AppHeader />
      </header>
      <main>
        <AppMain store={mainStore} />
      </main>
      <header>
        <AppFooter />
      </header>
    </div>
  );
}

export default App;
