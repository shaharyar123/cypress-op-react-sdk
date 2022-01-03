import {
  OptimizelyProvider,
  createInstance,
  setLogLevel,
  enums,
  OptimizelyDecideOption,
} from "@optimizely/react-sdk";
import { GenericRenderer } from "../shared/generic-renderer";

setLogLevel(enums.LOG_LEVEL.ERROR);

const instance = createInstance({
  sdkKey: process.env.REACT_APP_SDK_KEY,
  defaultDecideOptions: [OptimizelyDecideOption.INCLUDE_REASONS],
});
export const RenderingWithUserObject = () => {
  return (
    <OptimizelyProvider
      optimizely={instance}
      user={{
        id: "default",
        attributes: {
          gender: "female",
        },
      }}
    >
      <GenericRenderer
        id="flag-one"
        flagKey="flag-one"
        title="With User Object"
      ></GenericRenderer>
    </OptimizelyProvider>
  );
};
