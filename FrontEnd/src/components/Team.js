import { useLocation } from "react-router-dom";

export default function Team() {
  const { state } = useLocation();
  return <div className="text-white">{state.teamID}</div>;
}
