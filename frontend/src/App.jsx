import { Outlet } from "react-router-dom";
import "./App.css";
import Aside from "./components/Aside";
import Navbar from "./components/Navbar";
import CursorSpotlight from "./components/CursorSpotlight";

const App = () => {
  return (
    <>
      <CursorSpotlight />
      <div className="bg-grain"></div>
      <div className="bg-vignette"></div>
      <div className="bg-center-glow"></div>
      <div className="animated-bg-layer"></div>
      <div className="floating-element-1"></div>
      <div className="floating-element-2"></div>
      <div className="floating-element-3"></div>
      <div className="blur-blob blob-1"></div>
      <div className="blur-blob blob-2"></div>
      <div className="blur-blob blob-3"></div>
      <div className="blur-blob blob-4"></div>
      <div className="blur-blob blob-5"></div>
      <div className="blur-blob blob-6"></div>
      <div className="blur-blob blob-7"></div>
      <Aside />
      <div className="main-content">
        <Navbar />
        <section
          style={{
            scrollBehavior: "smooth",
          }}
        >
          <Outlet />
        </section>
      </div>
    </>
  );
};

export default App;
