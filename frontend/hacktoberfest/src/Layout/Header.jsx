import HeaderImg from "../assets/Logo.png";
import HeaderSVG from "../assets/Header-background.png";
import { Link, useLocation } from "react-router-dom";
import P1 from "../Components/P1";

export default function Header() {
  let location = useLocation();
  const route = location.pathname;

  return (
    <nav className="w-full min-h-[200px]">
      <div className="w-full bg-header-green pt-5">
        <img className="w-1/2 mx-auto max-w-[355px]" src={HeaderImg} alt="Logo Header" />
      </div>
      <div className="w-full relative h-[80px] overflow-hidden m-auto">
        <img
          src={HeaderSVG}
          alt="Logo Header"
          className="bg-header-green absolute w-full h-[120px]"
        />
        <ul className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[98%] flex text-[20px] bg-header-yellow py-2 px-5 justify-between max-w-[355px] md:bottom-1">
          <li>
            <Link
              to="/register"
              className={`${
                route === "/register" ? "underline" : ""
              } underline-offset-8 hover:underline`}
            >
              <P1>REGISTER</P1>
            </Link>
          </li>
          <li>
            <P1>
              <Link
                to="/participants"
                className={`${
                  route === "/participants" ? "underline" : ""
                } underline-offset-8 hover:underline`}
              >
                PARTICIPANTS
              </Link>
            </P1>
          </li>
        </ul>
      </div>
    </nav>
  );
}
