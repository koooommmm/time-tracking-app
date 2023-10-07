type Props = {
  trackRecordsData: TrackRecord[];
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
        </tr>
      </thead>
      <tbody>
        {props.trackRecordsData.map((data: any) => {
          return (
            <tr key={data.id}>
              <td>{data.name}</td>
              <td>{data.start_at}</td>
              <td>{data.end_at}</td>
              <td>{data.status}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TrackRecordList;
