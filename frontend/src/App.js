import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Edit from './components/Edit';
import SplashScreen from './components/SplashScreen';
import data from './data.js';
import './App.css';



export default function App() {
 

const cards = data.map(item => {
		return (
			<Card
				item={item}
			/>
		)
	})
const [isLoading,setIsLoading]=React.useState(true);

React.useEffect(() => {
    const t= window.setInterval(() => {
        setIsLoading(false);
      },1000
    );
    return () => {
      window.clearInterval(t);
    };
  },[]
);



return (
  isLoading ?
  <SplashScreen /> :
  
  <div className="m">
    <Navbar />
    <div>
    {cards}
    </div>
    <Edit />
  </div>
);

}