import Span from "./Span";
import Icon from "./Icon";
import Label from "./Label";
import P3 from "./P3";
import { useRef } from "react";

let dayFirstCounter = 0;
let monthFirstCounter = 0;
export default function Date({ labelText, setDay, setMonth, setYear, day, month, year }) {
  const monthRef = useRef(null);
  const yearRef = useRef(null);

  const checkNumbers = (value) => {
    const re = /^[0-9\b]+$/;
    if (!(value === "" || re.test(value))) {
      return false;
    }
    return true;
  };

  // auto focus to the next input
  const autoFocus = (counter, nextInputRef, lastValue, nextInputState, maxLength) => {
    if (counter === 0) {
      nextInputRef.current.focus();
      try {
        nextInputState((prevInput) => {
          if (prevInput.length < maxLength) {
            return prevInput + lastValue;
          }
          return prevInput;
        });
      } catch (exception) {
        console.log(exception);
      }
    }
  };

  const handleDay = (e) => {
    const value = e.target.value;
    if (value.length <= 2 && checkNumbers(value)) {
      setDay(value);
      dayFirstCounter = 0;
    } else {
      const lastDigit = value.slice(-1);
      autoFocus(dayFirstCounter, monthRef, lastDigit, setMonth, 2);
      dayFirstCounter++;
    }
  };

  const handleMonth = (e) => {
    const value = e.target.value;
    if (value.length <= 2 && checkNumbers(value)) {
      setMonth(value);
      monthFirstCounter = 0;
    } else {
      const lastDigit = value.slice(-1);
      autoFocus(monthFirstCounter, yearRef, lastDigit, setYear, 4);
      monthFirstCounter++;
    }
  };

  const handleYear = (e) => {
    const value = e.target.value;
    if (value.length <= 4 && checkNumbers(value)) {
      setYear(value);
    }
  };

  return (
    <Span>
      <Label>
        <P3>{labelText}</P3>
      </Label>
      <Span className="rounded bg-inherit border-2 text-[16px] flex lg:text-[20px]">
        <input
          type="number"
          name="day"
          id="day"
          placeholder="00"
          maxLength="2"
          className="ml-5 bg-transparent w-6 border-0 outline-0 m-1"
          onChange={(e) => handleDay(e)}
          value={day}
        />
        /
        <input
          type="number"
          name="month"
          id="month"
          placeholder="00"
          className="bg-transparent w-6 border-0 outline-0 m-1"
          maxLength="2"
          onChange={(e) => handleMonth(e)}
          value={month}
          ref={monthRef}
        />
        /
        <input
          type="number"
          name="year"
          id="year"
          placeholder="0000"
          className="bg-transparent border-0 outline-0 m-1 flex-grow"
          maxLength="4"
          onChange={(e) => handleYear(e)}
          value={year}
          ref={yearRef}
        />
        <Icon className="fa-regular fa-calendar-days right-[16px] bottom-[8px]" />
      </Span>
    </Span>
  );
}
