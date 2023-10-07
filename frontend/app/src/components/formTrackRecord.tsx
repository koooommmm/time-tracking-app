import axios from "axios";

type props = {
  updateRecords: () => void;
};

const FormTrackRecord = (props: props) => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    await axios.post(
      process.env.NEXT_PUBLIC_BACKEND_HOST + "/api/trackRecords/",
      {
        name: data.get("name"),
        status: "進行中",
      }
    );

    props.updateRecords();
  };

  return (
    <form
      onSubmit={(event) => {
        handleSubmit(event);
      }}
    >
      <label>
        内容:
        <input required type="text" name="name" />
        <button color="inherit" type="submit">
          登録
        </button>
      </label>
    </form>
  );
};

export default FormTrackRecord;
