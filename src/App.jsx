import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";


function App() {
  return (
    <>
      <BrowserRouter basename="/personal-portfolio/">
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;