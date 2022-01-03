import {
  OptimizelyProvider,
  createInstance,
  setLogLevel,
  enums,
  OptimizelyDecideOption,
  useDecision,
} from "@optimizely/react-sdk";
import { GenericUseDecisionRenderer } from "../shared/generic-useDecision-renderer";

setLogLevel(enums.LOG_LEVEL.INFO);

const instance = createInstance({
  sdkKey: process.env.REACT_APP_SDK_KEY,
  defaultDecideOptions: [OptimizelyDecideOption.INCLUDE_REASONS],
});

instance.setUser({
  id: "default1",
});

export const RenderingWithUserPromise = () => {
  return (
    <OptimizelyProvider optimizely={instance}>
      <GenericUseDecisionRenderer
        id="flag-one"
        flagKey="flag-one"
        title="With User Promise"
      ></GenericUseDecisionRenderer>
    </OptimizelyProvider>
  );
};
