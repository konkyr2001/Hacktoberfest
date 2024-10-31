import GreenText from "./GreenText";
import P3 from "./P3";

export default function ParticipantLabel({ label, value }) {
  return (
    <li className="m-5 md:m-8">
      <P3>
        <GreenText>{label}:</GreenText> {value}
      </P3>
    </li>
  );
}
