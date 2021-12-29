import React, { useContext, useState } from "react";

import "./App.css";
//import * as optimizely from '@optimizely/optimizely-sdk';
//import { OptimizelyProvider, createInstance, setLogLevel, enums, OptimizelyDecision, OptimizelyDecideOption, OptimizelyExperiment, OptimizelyFeature, useFeature, useDecide } from '@optimizely/react-sdk';
import {
  OptimizelyProvider,
  createInstance,
  setLogLevel,
  enums,
  useDecision,
  OptimizelyDecideOption,
  OptimizelyContext,
} from "@optimizely/react-sdk";
import { ComponentWithSDKkey } from "./components/componentWithSDKkey";

setLogLevel(enums.LOG_LEVEL.ERROR);

// const instance = createInstance({
// sdkKey: "3pGUpg7VbygT5rZR9p8gA",
// defaultDecideOptions: [OptimizelyDecideOption.INCLUDE_REASONS],
// datafileOptions: {
// autoUpdate: true,
// updateInterval: 3000,
// },
// });

function App() {
  return (
    // <OptimizelyProvider
    //   optimizely={instance}
    //   timeout={2000}
    //   user={{
    //     id: "zee",
    //     attributes: {
    //       gender: "female",
    //     },
    //   }}
    // >
    //   <MainContent />
    // </OptimizelyProvider>

    <>
      <ComponentWithSDKkey></ComponentWithSDKkey>
    </>
  );
}

function MainContent() {
  const { optimizely: opt } = useContext(OptimizelyContext);
  const [showFlagTwo, setShowFlagTwo] = useState(true);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {/*<button onClick={() => { setShowFlagTwo(!showFlagTwo) }}>Ghaayib ho jaa</button>*/}
          {/* <button
            onClick={() => {
              // @ts-ignore
              opt && opt.removeAllForcedDecisions();
            }}
          >
            Remove All Decision
          </button> */}
        </div>
        <hr style={{ width: "100%" }} />
        {/* <MyComponentFD id="flag-one" flagKey="flag-one" /> */}
        {/* <MyComponentFD id="flag-two" flagKey="flag-two" /> */}
        {/* <MyComponentFD id="flag-three" flagKey="flag-three" /> */}
        {/* {showFlagTwo && <MyComponentFD id="flag-three2" flagKey="flag-three" />} */}
        <MyComponentFDOverride id="flag-three3" flagKey="flag-three" />
      </header>
    </div>
  );
}

let times: { [key: string]: number } = {};

function MyComponentFD({ id, flagKey }: { id: string; flagKey: string }) {
  return <div />;
  const { optimizely: opt } = useContext(OptimizelyContext);
  if (times[id] === undefined) {
    times[id] = 0;
  }
  const [decision, clientReady, didTimeout] = useDecision(flagKey, {
    autoUpdate: false,
  });
  console.log(`clientReady ${clientReady} | didTimeout ${didTimeout}`);
  console.log(JSON.stringify(decision, null, 2));
  return (
    <>
      <div>Rendered {++times[id]} times</div>
      <div>{flagKey}</div>
      <div>{decision.variationKey}</div>
      <br />
      <button
        onClick={() => {
          // @ts-ignore
          opt && opt.setForcedDecision({ flagKey }, { variationKey: "forced" });
        }}
      >
        Set Forced Decision
      </button>

      <button
        onClick={() => {
          // @ts-ignore
          opt && opt.removeForcedDecision({ flagKey });
        }}
      >
        Remove forced Decision
      </button>

      <hr style={{ width: "100%" }} />
    </>
  );
}

function MyComponentFDOverride({
  id,
  flagKey,
}: {
  id: string;
  flagKey: string;
}) {
  const [autoUpdate, setAutoupdate] = useState(true);
  const [overrideUserId, setOverrideUserId] = useState<string | undefined>(
    undefined
  );
  const [overrideAttributes, setOverrideAttributes] = useState<any | undefined>(
    undefined
  );

  // console.log(overrideUserId);

  const { optimizely: opt } = useContext(OptimizelyContext);
  if (times[id] === undefined) {
    times[id] = 0;
  }
  // const [decision, clientReady, didTimeout] = useDecision(
  //   flagKey,
  //   { autoUpdate },
  //   { overrideUserId, overrideAttributes }
  // );
  //console.log(`clientReady ${clientReady} | didTimeout ${didTimeout}`);
  //console.log(JSON.stringify(decision, null, 2));
  return (
    <>
      <div id="with-sdk-key-rendered-times">Rendered {++times[id]} times</div>
      <div>{flagKey}</div>
      {/* <div>{decision.variationKey}</div> */}
      <br />
      {/* <button onClick={() => setAutoupdate(!autoUpdate)}>
        Toggle Autoupdate
      </button>
      <button
        onClick={() => setOverrideUserId(!overrideUserId ? "user2" : undefined)}
      >
        Toggle user override
      </button>
      <button
        onClick={() =>
          setOverrideAttributes(
            !overrideAttributes ? { attr: "attr2" } : undefined
          )
        }
      >
        Toggle attr override
      </button> */}
      {/* <button
        onClick={() => {
          // @ts-ignore
          opt && opt.setForcedDecision({ flagKey }, { variationKey: "forced" });
        }}
      >
        Set Forced Decision
      </button> */}

      {/* <button
        onClick={() => {
          // @ts-ignore
          opt && opt.removeForcedDecision({ flagKey });
        }}
      >
        Remove forced Decision
      </button> */}

      <hr style={{ width: "100%" }} />
    </>
  );
}

export default App;
