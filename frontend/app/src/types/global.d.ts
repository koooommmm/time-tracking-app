interface TrackRecord {
  id: number;
  name: string;
  start_at: Date;
  end_at: Date;
  status: string;
}

type trackRecordsDataProps = {
  trackRecordsData: TrackRecord[];
};
