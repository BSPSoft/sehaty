import { BrowserRouter, Route, Routes } from "react-router-dom";
import Query from "./Query";
import Dashboard from "./Dashboard";

 


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Query />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
    </>
  
  );
}

export default App;
