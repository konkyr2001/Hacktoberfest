import Label from "./Label";
import Span from "./Span";
import Icon from "./Icon";
import P3 from "./P3";

export default function Select({ labelText, options, setGender, ...props }) {
  const handleSelect = (event) => {
    setGender(event.target.value);
  };

  return (
    <Span>
      <Label id={props.id}>
        <P3>{labelText}</P3>
      </Label>
      <Icon className="fa-solid fa-caret-down bottom-[11px]" />
      <select
        className="w-full pl-5 py-1 rounded bg-inherit border-2 appearance-none pointer text[16px] lg:text-[20px] cursor-pointer"
        defaultValue={"DEFAULT"}
        onChange={(e) => handleSelect(e)}
        {...props}
      >
        <option value="DEFAULT" disabled hidden>
          Select your option
        </option>
        {options.map((option, index) => (
          <option className="bg-light-text text-black" key={index} value={option.value}>
            {option.gender}
          </option>
        ))}
      </select>
    </Span>
  );
}
