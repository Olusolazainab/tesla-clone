import React from 'react';

import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
  
  
    <div className="App">
      <Routes>
				<Route
					path='/'
					element={
						<>
							{' '}
							<Header /> <Login />
						</>
					}
				/>
				<Route
					path='/home'
					element={
						<>
							{' '}
							<Header /> <Home />
						</>
					}
				/>
					<Route
					path='/modely'
					element={
						<>
							{' '}
							<Header /> <ModelY />
						</>
					}
				/>
			</Routes>
    
    </div>
  
  );
}

export default App;
