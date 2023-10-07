import FormTrackRecord from "@/components/formTrackRecord";
import TrackRecordList from "@/components/trackRecordList";
import { getTrackRecords } from "@/lib/trackrecords";
import Head from "next/head";
import { useEffect, useState } from "react";

const Home = () => {
  const [trackRecordsData, setTrackRecordsData] = useState([]);

  useEffect(() => {
    updateRecords();
  }, []);

  const updateRecords = async () => {
    const records = await getTrackRecords();
    setTrackRecordsData(records);
  };

  return (
    <>
      <Head>
        <title>time tracking app</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <h1>時間計測</h1>
      <TrackRecordList trackRecordsData={trackRecordsData}></TrackRecordList>
      <FormTrackRecord updateRecords={updateRecords}></FormTrackRecord>
    </>
  );
};

export default Home;
