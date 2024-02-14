import { useTimer } from "./useTimer";

export default function Timer() {
  const count = useTimer();

  return <div>Count: {count}</div>;
}
