import React from 'react';
import logo from './logo.svg';
// import { ReactBingmaps } from 'react-bingmaps';
// import volunteer from './components/volunteer';
import './App.css';
import Header from './components/Header';
import Table from './components/Table';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Table />
      <Footer />
    </div>
  );
}

export default App;