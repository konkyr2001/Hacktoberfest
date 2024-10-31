import Input from "../../Components/Input";
import Select from "../../Components/Select";
import Textarea from "../../Components/Textarea";
import Checkboxes from "../../Components/CheckBoxes";
import Date from "../../Components/Date";
import InputGroup from "../../Components/InputGroup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../Components/Loading";
import Button from "../../Components/Button";

const genderOptions = [
  { value: "male", gender: "Male" },
  { value: "female", gender: "Female" },
  { value: "non-binary", gender: "Non-binary" }, // not recommended
  { value: "other", gender: "Other" }, // not recommended
];
const interestData = ["AI", "Backend", "ML", "Fullstack", "Frontend"];
export default function RegisterForm() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gitLabID, setGitLabID] = useState("");
  const [kaggleID, setKaddleID] = useState("");
  const [gender, setGender] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [about, setAbout] = useState("");
  const [interest, setInterest] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submitUser = (event) => {
    event.preventDefault();
    setLoading(true);

    let syncDay = day;
    let syncMonth = month;
    let syncYear = year;
    if (syncDay == "") {
      syncDay = "00";
    }
    if (syncMonth == "") {
      syncMonth = "00";
    }
    if (syncYear == "") {
      syncYear = "0000";
    }
    const dob = syncDay + "/" + syncMonth + "/" + syncYear;

    const user = {
      name,
      lastname: lastName,
      gitlabID: gitLabID,
      kaggleID,
      gender,
      dob,
      about,
      interest,
    };

    fetch("http://localhost:8080/api/participants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then(() => {
        setTimeout(() => {
          setLoading(false);
          navigate("/participants");
        }, 1000);
      })
      .catch((error) => {
        setLoading(false);
        alert("Something is wrong with the server, " + error);
      });
  };

  return (
    <form
      className="w-[90%] m-auto h-full mt-5 max-w-[1115px] relative"
      onSubmit={(e) => submitUser(e)}
    >
      <Loading loading={loading} />
      <InputGroup>
        <Input
          labelText="Name *"
          placeholder="| Enter your name"
          id="name"
          name="name"
          type="text"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          labelText="Last name *"
          placeholder="| Enter your name"
          id="last-name"
          name="last-name"
          type="text"
          required
          onChange={(e) => setLastName(e.target.value)}
        />
      </InputGroup>
      <InputGroup>
        <Input
          labelText="Gitlab ID *"
          placeholder="| Enter your name"
          id="gitlab"
          name="gitlab"
          type="text"
          required
          onChange={(e) => setGitLabID(e.target.value)}
        />
        <Input
          labelText="Kaggle ID *"
          placeholder="| Enter your name"
          id="kaggle"
          name="kaggle"
          type="text"
          required
          onChange={(e) => setKaddleID(e.target.value)}
        />
      </InputGroup>
      <InputGroup>
        <Select
          labelText="Gender"
          name="gender"
          id="gender"
          form="gender"
          options={genderOptions}
          setGender={setGender}
        />
        <Date
          labelText="Date of birth"
          placeholder="00/00/0000"
          name="dob"
          id="dob"
          type="date"
          setDay={setDay}
          setMonth={setMonth}
          setYear={setYear}
          day={day}
          month={month}
          year={year}
        />
      </InputGroup>
      <Textarea
        labelText="About you"
        placeholder="| Enter your name"
        id="about-you"
        name="about-you"
        rows="5"
        cols="29"
        onChange={(e) => setAbout(e.target.value)}
      />
      <Checkboxes interestData={interestData} setInterest={setInterest} />
      <Button extraClass="md:mr-0" type="submit" value="submit">
        SUBMIT
      </Button>
    </form>
  );
}
