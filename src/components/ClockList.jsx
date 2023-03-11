import Clock from "./Clock";

export default function ClockList(props) {
  const { clockList } = props;

  return (
    <ul className="clock-list">
      {clockList.map((clockItem) => (
        <Clock {...props} key={clockItem.id} clock={clockItem} />
      ))}
    </ul>
  );
}