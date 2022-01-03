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
  // no datafile here
  defaultDecideOptions: [OptimizelyDecideOption.INCLUDE_REASONS],
});

export const RenderingWhenDatafileNeverLoaded = () => {
  //When datafile never loaded
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
        title="With no datafile"
      ></GenericUseDecisionRenderer>
    </OptimizelyProvider>
  );
};
