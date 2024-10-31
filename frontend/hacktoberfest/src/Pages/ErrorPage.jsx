import { useNavigate, useLocation } from "react-router-dom";
import H1 from "../Components/H1";
import H2 from "../Components/H2";
import GreenText from "../Components/GreenText";
import Button from "../Components/Button";

export default function ErrorPage() {
  const url = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/register");
  };

  return (
    <div className="text-center">
      <H1 className="my-2">Error Page</H1>
      <H2>
        The Page <GreenText>{url.pathname}</GreenText> does not exist
      </H2>
      <Button extraClass="my-10" onClick={handleClick}>
        Go to register
      </Button>
    </div>
  );
}
