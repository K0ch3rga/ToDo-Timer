const CalendarBackground: React.FC = () => {
  const lines = [];
  for (let i = 0; i < 25; i++) {
    lines.push(<CalendarBackgroundSpliter time={i} key={i} />);
  }
  
  return <div className="background">{lines}</div>;
};

const CalendarBackgroundSpliter:React.FC<{time: number}> = (props) => {
  return (
    <div className="line">
      <div className="time">{props.time}</div>
      <div className="splitter"></div>
    </div>
  );
};

export default CalendarBackground;
