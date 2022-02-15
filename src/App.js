import React from 'react';
import Header from './component/Header';
import Content from './component/Contents';
import Content2 from './component/Content2';
import Footer from './component/Footer';

function App() {
  return (
    <div className="pusher">
      <Header />
      <Content />
      <Content2 />
      <Footer />
    </div>
    
  );
}

export default App;
