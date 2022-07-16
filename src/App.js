import React from 'react'
import CoinTable from './Component/Table/Table'
import News from './Component/News/News'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  
  return (
    <div className="App">
      
        
  <BrowserRouter>
    <Routes>
      <Route path="/" element={< News/>} />
        
        
        <Route path="teams" element={<CoinTable />} />
          
          
      
    </Routes>
  </BrowserRouter>
      
    </div>
  );
}

export default App;
