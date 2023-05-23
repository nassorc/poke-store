import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dropdown, DropdownItem } from "../Dropdown";
import Button from "../Button";
import HeaderButton from "../Button/HeaderButton/HeaderButton";
import pageLogo from "/header-logo-icon.png";
import {
  faXmark,
  faMoon,
  faBars,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useRef, useState } from "react";
interface HeaderType {
  name: string;
}
export default function Header(params: HeaderType) {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownButtonRef = useRef(null);
  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (e.target.closest("button") != dropdownButtonRef.current) {
        setShowDropdown(false);
      }
    });
  }, []);

  return (
    <header className="sticky z-50 top-0 px-4 h-20 bg-white border-b-2 border-b-slate-700/40 ">
      <nav className="mx-auto max-w-screen-xl h-full flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-14 h-14">
            <img src={pageLogo} />
          </div>
          <p className="text-xl">PokeStore</p>
        </div>
        <div className="flex [&>*]:mr-2 last:m-0 [&>button]:text-black">
          <input
            type="text"
            placeholder="search"
            className="px-3 border border-black/40 rounded-md"
          />
          <Button className="relative bg-orange-200 w-12 h-12 hover:outline outline-2 outline-blue-700/50 rounded-md">
            <FontAwesomeIcon icon={faSun} />
          </Button>
          <Button className="relative bg-red-200 w-12 h-12 hover:outline outline-2 outline-blue-700/50 rounded-md">
            <FontAwesomeIcon icon={faCartShopping} />
          </Button>
          <Button
            ref={dropdownButtonRef}
            className={`relative bg-slate-400 w-12 h-12 hover:outline ${showDropdown ? "outline" : ""
              } outline-2 outline-blue-700/50 rounded-md`}
            onClick={() => setShowDropdown(!showDropdown)}
          >
            {showDropdown ? (
              <FontAwesomeIcon icon={faXmark} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
            <Dropdown show={showDropdown}>
              <DropdownItem
                leftIcon={<FontAwesomeIcon icon={faCartShopping} />}
                text="Logout"
              />
            </Dropdown>
          </Button>
        </div>
      </nav>
    </header>
  );
}
