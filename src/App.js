import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgba(var(--bs-dark-rgb))";
      showAlert("Dark Mode Has Been Enabled", "Success");
      // document.title = "TextUtils - dark mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Has Been Enabled", "Success");
    }
  };

  return (
    <BrowserRouter>
      {/* <Navbar/> */}
      <Navbar
        title="TextUtils"
        aboutText="About TextUtils"
        mode={mode}
        toggleMode={toggleMode}
      />
      {/* <Navbar title='TextUtils'/> */}

      <Alert alert={alert} mode={mode} toggleMode={toggleMode} />

      <div className="container my-4">
        <Routes>
          <Route
            exact
            path="/about"
            element={<About mode={mode} toggleMode={toggleMode} />}
          ></Route>

          <Route
            index
            element={
              <TextForm
                heading="Try TextUtils : "
                mode={mode}
                toggleMode={toggleMode}
                showAlert={showAlert}
              />
            }
          ></Route>
          <Route
            exact
            path="/TextUtils"
            element={
              <TextForm
                heading="Try TextUtils : "
                mode={mode}
                toggleMode={toggleMode}
                showAlert={showAlert}
              />
            }
          ></Route>
        </Routes>
        {/* <TextForm heading = "Try TextUtils : " mode = {mode} toggleMode = {toggleMode} showAlert = {showAlert} /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
