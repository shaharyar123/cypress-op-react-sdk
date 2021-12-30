import "./App.css";
import { setLogLevel, enums } from "@optimizely/react-sdk";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ComponentWithSDKkey } from "./components/componentWithSDKkey";
import { ComponentWithDatafile } from "./components/componentWithDatafile";

setLogLevel(enums.LOG_LEVEL.ERROR);

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/sdkKey" element={<ComponentWithSDKkey />}></Route>
            <Route path="/datafile" element={<ComponentWithDatafile />}></Route>
            <Route path="/" element={<ComponentWithSDKkey />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
