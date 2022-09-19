import Header from "./components/header/header";
import Page1 from "./components/page1/page1";
import Page2 from "./components/page2/page2";

import {Routes,Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
         <Header/>
         <Routes>
           <Route path="/" element={<Page2/>} />
           <Route path="/Detail" element={<Page1/>} />
           
         </Routes>
    </div>
  );
}

export default App;
