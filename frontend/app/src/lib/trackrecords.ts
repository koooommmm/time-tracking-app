import axios from "axios";

export async function getTrackRecords() {
  const track_records = await axios.get(
    process.env.BACKEND_HOST + "/api/trackRecords/"
  );
  return track_records.data;
}
