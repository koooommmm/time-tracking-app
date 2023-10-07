import TrackRecordList from "@/components/trackRecordList";
import { getTrackRecords } from "@/lib/trackrecords";
import Head from "next/head";

export async function getStaticProps() {
  const trackRecordsData = await getTrackRecords();

  return {
    props: {
      trackRecordsData,
    },
  };
}

export default function Home(props: trackRecordsDataProps) {
  return (
    <>
      <Head>
        <title>time tracking app</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <h1>時間計測</h1>
      <TrackRecordList
        trackRecordsData={props.trackRecordsData}
      ></TrackRecordList>
    </>
  );
}
