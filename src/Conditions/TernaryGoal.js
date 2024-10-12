import MadeGoal from "./MadeGoal";
import MissedGoal from "./MissedGoal";

export default function Target(props) {
  const isGoal = props.isGoal;
  return <>{isGoal ? <MadeGoal /> : <MissedGoal />}</>;
}
