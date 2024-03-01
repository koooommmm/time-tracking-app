import FormTrackRecord from "@/components/formTrackRecord";
import TrackRecordList from "@/components/trackRecordList";
import { getTrackRecords } from "@/lib/trackrecords";
import axios, { AxiosInstance } from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";

const client: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_HOST,
  headers: {
    "Content-Type": "application/json",
  },
});

const Home = () => {
  const [trackRecordsData, setTrackRecordsData] = useState([]);

  useEffect(() => {
    updateRecords();
  }, []);

  const updateRecords = async () => {
    const records = await getTrackRecords(client);
    setTrackRecordsData(records);
  };

  return (
    <>
      <Head>
        <title>time tracking app</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <h1>時間計測</h1>
      <TrackRecordList
        trackRecordsData={trackRecordsData}
        updateRecords={updateRecords}
      ></TrackRecordList>
      <FormTrackRecord updateRecords={updateRecords}></FormTrackRecord>
    </>
  );
};

export default Home;
