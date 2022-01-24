import {
  OptimizelyProvider,
  createInstance,
  setLogLevel,
  enums,
  OptimizelyDecideOption,
  useDecision,
} from "@optimizely/react-sdk";
import axios from "axios";

setLogLevel(enums.LOG_LEVEL.ERROR);

const instance = createInstance({
  sdkKey: "some", // because autoupdate works with sdk key and if urlTemplate is given it will fetch data from that url
  defaultDecideOptions: [OptimizelyDecideOption.INCLUDE_REASONS],
  datafileOptions: {
    urlTemplate: "http://localhost:5000/myDatafile",
  },
});

const setForceFeMale = () => {
  instance.setForcedDecision(
    {
      flagKey: "product_sort",
      ruleKey: "product_sort_targeted_delivery",
    },
    { variationKey: "female-variation" }
  );
};

let times: { [key: string]: number } = {};

const Renderer = ({
  id,
  flagKey,
  title,
}: {
  id: string;
  flagKey: string;
  title: string;
}) => {
  if (times[id] === undefined) {
    times[id] = 0;
  }
  const [decision, clientReady, didTimeout] = useDecision(flagKey, {
    autoUpdate: true,
  });
  return (
    <div>
      <div id={id}>{title}</div>
      <div id={"rendered-times-" + id}>Rendered {++times[id]} times</div>
      <div id={"flag-" + id}>{flagKey}</div>
      <div id={"variation-key-" + id}>{decision.variationKey}</div>
    </div>
  );
};

export const ReleventRernderOnForceDecision = () => {
  return (
    <OptimizelyProvider
      optimizely={instance}
      user={{
        id: "zee",
      }}
    >
      <Renderer
        id="flag-one"
        flagKey="product_sort"
        title="Component 1"
      ></Renderer>

      <div>
        <button id="addForceDecision" onClick={setForceFeMale}>
          {" "}
          Force Decision Female
        </button>
      </div>

      <br></br>
      <br></br>

      <Renderer
        id="flag-two"
        flagKey="new_product_sort"
        title="Component 2"
      ></Renderer>
    </OptimizelyProvider>
  );
};
