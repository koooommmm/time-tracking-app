import CountTimer from "@/components/countTimer";

type Props = {
  trackRecordsData: TrackRecord[];
};

const formatDate = (dateString: string) => {
  const date: Date | null = dateString ? new Date(dateString) : null;

  return date
    ? new Intl.DateTimeFormat("ja-jp", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }).format(date)
    : null;
};

const handleClick = (id: number) => {
  return NaN;
};

const TrackRecordList = (props: Props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>内容</th>
          <th>開始時刻</th>
          <th>終了時刻</th>
          <th>ステータス</th>
          <th>経過時間</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {props.trackRecordsData.map((record: TrackRecord) => {
          return (
            <tr key={record.id}>
              <td>{record.name}</td>
              <td>{formatDate(record.start_at)}</td>
              <td>{formatDate(record.end_at)}</td>
              <td>{record.status}</td>
              <td>
                <CountTimer record={record}></CountTimer>
              </td>
              <td>
                <button color="inherit" onClick={handleClick(record.id)}>
                  ボタン
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TrackRecordList;
