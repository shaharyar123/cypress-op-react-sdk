import {
  OptimizelyProvider,
  createInstance,
  setLogLevel,
  enums,
  OptimizelyDecideOption,
} from "@optimizely/react-sdk";
import { GenericRenderer } from "../shared/generic-renderer";
import datafile from "../../datafile.json";

setLogLevel(enums.LOG_LEVEL.INFO);

const instance = createInstance({
  datafile,
  defaultDecideOptions: [OptimizelyDecideOption.INCLUDE_REASONS],
});
export const ComponentWithDatafile = () => {
  return (
    <OptimizelyProvider
      optimizely={instance}
      timeout={2000}
      user={{
        id: "zee",
      }}
    >
      <GenericRenderer
        id="flag-one"
        flagKey="product_sort"
        title="With Datafile"
      ></GenericRenderer>
    </OptimizelyProvider>
  );
};
