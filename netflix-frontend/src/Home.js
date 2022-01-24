import React from 'react';
import Featured from './components/featured/Featured';
import Navbar from './components/navbar/Navbar';

function Home() {
  return <div className='bg-gray-900'>
          <Navbar />
          <Featured type="movie"/>
          
          
        </div>;
}

export default Home;
