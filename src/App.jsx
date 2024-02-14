// import TimerClean from "./Components/TimerClean";
import useTimer from "./Components/useTimer";
import Timer from "./Components/Timer";

export default function App() {
  const count = useTimer();

  return (
    <div>
      <h1>Timer</h1>
      <div>Count: {count}</div>
      <Timer />
    </div>
  );
}
