import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./routes/Layout";
import Home from "./routes/Home";
import List from "./routes/ImageList";


const App = () =>{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="search" element={<Home />} />
          <Route path="imageList" element={<List />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
