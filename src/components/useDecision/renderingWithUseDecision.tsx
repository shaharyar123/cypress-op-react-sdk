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
export const RenderingWithUseDecision = () => {
  return (
    <OptimizelyProvider
      optimizely={instance}
      user={{
        id: "zee",
        attributes: {
          gender: "female",
        },
      }}
    >
      <GenericUseDecisionRenderer
        id="flag-one"
        flagKey="flag-one"
        title="With useDecision"
      ></GenericUseDecisionRenderer>
    </OptimizelyProvider>
  );
};
