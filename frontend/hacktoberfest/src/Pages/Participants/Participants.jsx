import H1 from "../../Components/H1";
import Form from "../../Components/Form";
import ParticipantLabel from "../../Components/ParticipantLabel";
import { useEffect, useState } from "react";
import Loading from "../../Components/Loading";
import PageTitle from "../PageTitle";
import H2 from "../../Components/H2";

const labels = {
  name: "NAME",
  lastname: "LAST NAME",
  gitlabID: "GITLAB ID",
  kaggleID: "KAGGLE ID",
  gender: "GENDER",
  dob: "REGISTRATION DATE",
  about: "ABOUT YOU",
  interested: "INTERESTED IN",
};

export default function Participants() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [emptyDb, setEmptyDb] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:8080/api/participants")
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          setUsers(data);
          setEmptyDb(false);
        } else {
          setEmptyDb(true);
        }
      })
      .catch((error) => {
        setError(true);
        setEmptyDb(false);
        console.log("mpike");
        console.error("Error fetching users:", error);
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      });
  }, []);

  return (
    <>
      <PageTitle>
        <H1 className="my-2">Participants</H1>
        {emptyDb && <H2>Database is empty</H2>}
        {error && <H2>Error with the database</H2>}
      </PageTitle>
      <Form>
        <Loading loading={loading} />
        {!emptyDb &&
          users.map((data) => {
            return (
              <ul className="border-4 rounded-md my-8 py-2 m-auto max-w-[691px]" key={data.id}>
                {Object.entries(data).map(([dataKey, dataValue], id) => {
                  const label = labels[dataKey];
                  const key = data.id + "" + id;
                  return dataValue && label ? (
                    <ParticipantLabel key={key} label={label} value={dataValue} />
                  ) : null;
                })}
              </ul>
            );
          })}
      </Form>
    </>
  );
}
