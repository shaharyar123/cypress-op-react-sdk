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
  sdkKey: "some",
  defaultDecideOptions: [OptimizelyDecideOption.INCLUDE_REASONS],
  datafileOptions: {
    autoUpdate: false,
    updateInterval: 3000,
    urlTemplate: "http://localhost:5000/myDatafile",
  },
});

const updateDatafile = () => {
  axios
    .get(`http://localhost:5000/updateDatafile`)
    .then((res) => {})
    .catch((err) => console.log("err", err));
};
const resetDatafile = () => {
  axios
    .get(`http://localhost:5000/resetDatafile`)
    .then((res) => {})
    .catch((err) => console.log("err", err));
};

const changeUser = () => {
  instance.setUser({
    id: "newUser",
    attributes: {
      gender: "female",
    },
  });
};

const setForceFeMale = () => {
  // instance.setForcedDecision(
  //   {
  //     flagKey: "product_sort",
  //     ruleKey: "product_sort_targeted_delivery",
  //   },
  //   { variationKey: "female-variation" }
  // );
};

let times: { [key: string]: number } = {};

const GenericUseDecisionRenderer = ({
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
      <div id="title">{title}</div>
      <div id="rendered-times">Rendered {++times[id]} times</div>
      <div>{flagKey}</div>
      <div>{decision.variationKey}</div>
    </div>
  );
};

export const Abctest = () => {
  return (
    <OptimizelyProvider
      optimizely={instance}
      // timeout={2000}
      user={{
        id: "zee",
        attributes: {
          gender: "male",
        },
      }}
    >
      <GenericUseDecisionRenderer
        id="flag-one"
        flagKey="product_sort"
        title="With Datafile"
      ></GenericUseDecisionRenderer>

      <div>
        <button id="updateDatafileBtn" onClick={updateDatafile}>
          Update datafile
        </button>
        <button id="resetDatafileBtn" onClick={resetDatafile}>
          Reset datafile
        </button>
      </div>
      <div>
        <button id="changeUser" onClick={changeUser}>
          {" "}
          Change User
        </button>
      </div>

      <div>
        <button id="addForceDecision" onClick={setForceFeMale}>
          {" "}
          Force Decision Female
        </button>
      </div>
    </OptimizelyProvider>
  );
};
