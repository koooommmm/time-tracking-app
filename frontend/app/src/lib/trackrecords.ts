import { AxiosInstance } from "axios";

export const getTrackRecords = async (client: AxiosInstance) => {
  const track_records = await client.get("/api/trackRecords/");
  return track_records.data;
};
