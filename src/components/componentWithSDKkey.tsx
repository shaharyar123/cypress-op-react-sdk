import React, { useState } from "react";
import {
  OptimizelyProvider,
  createInstance,
  setLogLevel,
  enums,
  useDecision,
  OptimizelyDecideOption,
  OptimizelyContext,
} from "@optimizely/react-sdk";

setLogLevel(enums.LOG_LEVEL.ERROR);

const instance = createInstance({
  sdkKey: process.env.REACT_APP_SDK_KEY,
  defaultDecideOptions: [OptimizelyDecideOption.INCLUDE_REASONS],
});
export const ComponentWithSDKkey = () => {
  let times: { [key: string]: number } = {};

  function Generic({ id, flagKey }: { id: string; flagKey: string }) {
    if (times[id] === undefined) {
      times[id] = 0;
    }

    return (
      <div id="with-sdk-key" style={{ textAlign: "center" }}>
        <div id="with-sdk-key-rendered-times">Rendered {++times[id]} times</div>
        <div>{flagKey}</div>

        <hr style={{ width: "100%" }} />
      </div>
    );
  }

  return (
    <OptimizelyProvider
      optimizely={instance}
      timeout={2000}
      user={{
        id: "zee",
        attributes: {
          gender: "female",
        },
      }}
    >
      <Generic id="flag-one" flagKey="flag-one"></Generic>
    </OptimizelyProvider>
  );
};
