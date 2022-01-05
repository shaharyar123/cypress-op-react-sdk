import {
  OptimizelyProvider,
  createInstance,
  setLogLevel,
  enums,
  OptimizelyDecideOption,
  useDecision,
} from "@optimizely/react-sdk";
import { GenericUseDecisionRenderer } from "../shared/generic-useDecision-renderer";

setLogLevel(enums.LOG_LEVEL.ERROR);

const instance = createInstance({
  sdkKey: process.env.REACT_APP_SDK_KEY,
  defaultDecideOptions: [OptimizelyDecideOption.INCLUDE_REASONS],
});

export const RenderingWhenTimeout = () => {
  //When datafile is loaded after timeout
  return (
    <OptimizelyProvider
      optimizely={instance}
      user={{
        id: "zee",
        attributes: {
          gender: "female",
        },
      }}
      timeout={0.1}
    >
      <GenericUseDecisionRenderer
        id="flag-one"
        flagKey="flag-one"
        title="With timeout"
      ></GenericUseDecisionRenderer>
    </OptimizelyProvider>
  );
};
