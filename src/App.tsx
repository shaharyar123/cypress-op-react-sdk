import "./App.css";
import { setLogLevel, enums } from "@optimizely/react-sdk";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ComponentWithSDKkey } from "./components/initialization/componentWithSDKkey";
import { ComponentWithDatafile } from "./components/initialization/componentWithDatafile";
import { ComponentWithSDKkeyAndDatafile } from "./components/initialization/componentWithSDKkeyAndDatafile";
import { RenderingWithUseDecision } from "./components/useDecision/renderingWithUseDecision";
import { RenderingWithUserObject } from "./components/provider/renderingWithUserObject";
import { RenderingWithUserPromise } from "./components/provider/renderingWithUserPromise";
import { RenderingWhenTimeout } from "./components/provider/renderingWhenTimeout";
import { RenderingWhenDatafileNeverLoaded } from "./components/provider/renderingWhenDatafileNeverLoaded";

setLogLevel(enums.LOG_LEVEL.ERROR);

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/sdkKey" element={<ComponentWithSDKkey />}></Route>
            <Route path="/datafile" element={<ComponentWithDatafile />}></Route>
            <Route
              path="/keyDatafile"
              element={<ComponentWithSDKkeyAndDatafile />}
            ></Route>{" "}
            <Route
              path="/renderingUseDecision"
              element={<RenderingWithUseDecision />}
            ></Route>
            <Route
              path="/renderWithUserObject"
              element={<RenderingWithUserObject />}
            ></Route>{" "}
            <Route
              path="/renderWithUserPromise"
              element={<RenderingWithUserPromise />}
            ></Route>{" "}
            <Route
              path="/RenderingWhenTimeout"
              element={<RenderingWhenTimeout />}
            ></Route>{" "}
            <Route
              path="/RenderingWithoutDatafile"
              element={<RenderingWhenDatafileNeverLoaded />}
            ></Route>
            <Route path="/" element={<ComponentWithSDKkey />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
