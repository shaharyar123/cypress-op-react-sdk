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
import { AutoUpdateFalse } from "./components/hooks/autoUpdateFalse";
import { AutoUpdateTrue } from "./components/hooks/autoUpdateTrue";
import { ReleventRernderOnDatafileUpdate } from "./components/multiple-hooks/releventHooksRerenderOnDatafileUpdate";
import { ReleventRernderOnForceDecision } from "./components/multiple-hooks/releventHooksRerenderOnForceDecision";
import { ReleventRernderOnRemoveForceDecision } from "./components/multiple-hooks/releventHooksRerenderOnRemoveForceDecision";

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
            ></Route>{" "}
            <Route
              path="/falseAutoUpdate"
              element={<AutoUpdateFalse />}
            ></Route>{" "}
            <Route path="/trueAutoUpdate" element={<AutoUpdateTrue />}></Route>
            <Route path="/releventRernderOnDatafileUpdate" element={<ReleventRernderOnDatafileUpdate />}></Route>
            <Route path="/releventRernderOnForceDecision" element={<ReleventRernderOnForceDecision />}></Route>
            <Route path="/releventRernderOnRemoveForceDecision" element={<ReleventRernderOnRemoveForceDecision />}></Route>
            <Route path="/" element={<ComponentWithSDKkey />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
