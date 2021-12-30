import {
  OptimizelyProvider,
  createInstance,
  setLogLevel,
  enums,
  OptimizelyDecideOption,
} from "@optimizely/react-sdk";
import datafile from "../datafile.json";

setLogLevel(enums.LOG_LEVEL.INFO);

const instance = createInstance({
  datafile,
  defaultDecideOptions: [OptimizelyDecideOption.INCLUDE_REASONS],
});
export const ComponentWithDatafile = () => {
  let times: { [key: string]: number } = {};

  function Generic2({ id, flagKey }: { id: string; flagKey: string }) {
    if (times[id] === undefined) {
      times[id] = 0;
    }

    return (
      <div id="with-sdk-key">
        <div id="title">With Datafile</div>
        <div id="with-sdk-key-rendered-times">Rendered {++times[id]} times</div>
        <div>{flagKey}</div>
      </div>
    );
  }

  return (
    <OptimizelyProvider
      optimizely={instance}
      timeout={2000}
      user={{
        id: "zee",
      }}
    >
      <Generic2 id="flag-one" flagKey="product_sort"></Generic2>
    </OptimizelyProvider>
  );
};
