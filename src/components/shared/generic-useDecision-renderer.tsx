import { useDecision } from "@optimizely/react-sdk";

let times: { [key: string]: number } = {};

export const GenericUseDecisionRenderer = ({
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
