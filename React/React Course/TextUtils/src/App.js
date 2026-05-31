import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
// import TextForm from "./Components/TextForm";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Navbar title="TextUtils" aboutText="About" />
      <div className="container my-3">
        {/* <TextForm heading="Enter the text to analyze" /> */}
      </div>
      <About />
    </>
  );
}

export default App;
