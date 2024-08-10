import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import { Route, Routes } from "react-router-dom";
import Works from "./Pages/Works";
function App() {
  return (
  
      <>
        <div className="m-auto max-w-[1440px] p-7 font-montserrat text-xl text-white">
          <nav className="mb-[200px]">
            <NavBar />
          </nav>
          <main>
            <Routes>
              <Route element={<Home />} path="/"/>
              <Route element={<About />} path="/about" />
              <Route element={<Contact />} path="/contact" />
              <Route element={<Works />} path="/works" />
            </Routes>
          </main>
        </div>
      </>
  );
}

export default App;
