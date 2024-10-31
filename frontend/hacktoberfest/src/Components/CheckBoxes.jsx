import Label from "./Label";
import P2 from "./P2";
import P3 from "./P3";

export default function CheckBoxes({ interestData, setInterest, ...props }) {
  const submitCheckbox = (event, text) => {
    setInterest(text);
  };

  return (
    <div>
      <P3>What are you interested in</P3>
      <div className="grid grid-cols-2">
        {interestData.map((text) => {
          return (
            <span className="inline-block m-3 relative w-fit h-fit" key={text}>
              <input
                className="w-[18px] h-[18px] rounded-sm border-2 inline appearance-none accent-white checked:appearance-auto xl:w-[36px] xl:h-[36px] xl:border-4 xl:rounded-md"
                onClick={(e) => submitCheckbox(e, text)}
                type="checkbox"
                id={text}
                name="interest"
              />
              <Label
                className="ml-2 pb-2 text-white w-fit absolute top-1/2 -translate-y-1/2"
                id={props.id}
              >
                <P2 className="inline">{text}</P2>
              </Label>
            </span>
          );
        })}
      </div>
    </div>
  );
}
