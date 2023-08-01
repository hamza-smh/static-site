import { Routes, Route } from 'react-router-dom';
import HomePage from "./routes/HomePage/homepage.component";
import PricingPage from './routes/Pricing Pages/pricingpage.component';
import SelectPricingPlan from './routes/Pricing Pages/selectPricingPlan.component';

function App() {
  return (
    <Routes>      
      <Route path ="/" element={<HomePage />} />
      <Route path ="/pricing" element={<PricingPage />} />
      <Route path ="/select-pricing-plan" element={<SelectPricingPlan />} />

    </Routes>
  );
   
  
}

export default App;
