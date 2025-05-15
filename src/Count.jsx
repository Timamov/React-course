import { useEffect } from "react";
export default function Count({ number }){
  useEffect(() => {
    document.title = `You clciked ${number} times`;
  }, [number]);
  return <span className="count">{number}</span>
}