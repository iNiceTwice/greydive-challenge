import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard";
import Main from "./pages/Main";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </BrowserRouter>  
  );
}

export default App;
