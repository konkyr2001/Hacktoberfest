import PageTitle from "../PageTitle";
import RegisterForm from "./RegisterForm";
import H1 from "../../Components/H1";
import H2 from "../../Components/H2";

export default function Register() {
  return (
    <>
      <PageTitle>
        <H1 className="my-2">Register Here</H1>
        <H2>Welcome to Hacktoberfest 2023</H2>
        <H2>
          Fill in your information in order to <span className="block sm:inline">register</span>
        </H2>
      </PageTitle>
      <RegisterForm />
    </>
  );
}
