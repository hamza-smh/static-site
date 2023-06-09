import { Routes, Route } from 'react-router-dom';
import HomePage from "./routes/HomePage/homepage.component";
// import PortfolioDetails from './component/portfolio/portfolioDetails/portfolioDetails.components';

function App() {
  return (
    <Routes>      
      <Route path ="/" element={<HomePage />} />
      {/* <Route path = "/*" element ={<PortfolioDetails />}/> */}
    </Routes>
  );
   
  
}

export default App;
