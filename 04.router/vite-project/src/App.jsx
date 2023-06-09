import { Outlet} from "react-router-dom";
import "./App.css";
import Footer from "./companents/Footer";
import Header from "./companents/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet/>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes> */}

      <Footer />
    </div>
  );
}

export default App;
