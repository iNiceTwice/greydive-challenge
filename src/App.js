import { BrowserRouter, Routes, Route } from "react-router-dom"
import Main from "./pages/Main";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<div>Error 404</div>} />
          <Route path="/" element={<Main/>} />
          <Route path="/answers" element={<div>Respuestas</div>} />
        </Routes>
      </BrowserRouter>  
  );
}

export default App;
