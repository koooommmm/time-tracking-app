import axios from "axios";

export const getTrackRecords = async () => {
  const track_records = await axios.get(
    process.env.NEXT_PUBLIC_BACKEND_HOST + "/api/trackRecords/"
  );
  return track_records.data;
};
