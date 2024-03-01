import { useState } from "react";

type Props = {
  record: TrackRecord;
};

const initElapsedTime = (record: TrackRecord) => {
  if (!record.end_at) return 0;

  const start_at = new Date(record.start_at).getTime();
  const end_at = new Date(record.end_at).getTime();
  return (end_at - start_at) / 1000;
};

const computeDuration = (elapsedTime: number) => {
  const h: number = Math.floor(elapsedTime / 3600);
  const m: number = Math.floor((elapsedTime - h * 3600) / 60);
  const s: number = Math.round(elapsedTime - h * 3600 - m * 60);
  return (
    String(h).padStart(2, "0") +
    ":" +
    String(m).padStart(2, "0") +
    ":" +
    String(s).padStart(2, "0")
  );
};

const CountTimer = (props: Props) => {
  const [elapsedTime, setElapsedTime] = useState(initElapsedTime(props.record));

  const updateElapsedTime = () => {
    const start_at = new Date(props.record.start_at);
    const now = new Date();
    setElapsedTime((now.getTime() - start_at.getTime()) / 1000);
  };

  window.setInterval(function () {
    if (props.record.status == "進行中") {
      updateElapsedTime();
    }
  }, 1000);

  return <>{computeDuration(elapsedTime)}</>;
};

export default CountTimer;
