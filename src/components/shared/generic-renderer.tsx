let times: { [key: string]: number } = {};

export const GenericRenderer = ({
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

  return (
    <div>
      <div id="title">{title}</div>
      <div id="rendered-times">Rendered {++times[id]} times</div>
      <div>{flagKey}</div>
    </div>
  );
};
