import { Link, useNavigate } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { FaRegBell } from "react-icons/fa6";
import { RiVideoAddLine } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const text = e.target[0].value;

    navigate(`/results?search_query=${text}`);
  };
  return (
    <div className="flex justify-between items-center p-4">
      <Link to={"/"} className="flex items-center gap-[10px]">
        <RxHamburgerMenu className="hover:text-gray-400 cursor-pointer transition duration-500 text-2xl " />
        <img className="w-[40px]" src="/youtube.png" alt="logo" />
        <h1 className="hidden md:block text-xl">YouTube</h1>
      </Link>

      <div className=" search-line flex items-center gap-3 ">
        <form
          onSubmit={handleSubmit}
          className="flex items-center border border-gray-400 rounded-[20px]  overflow-hidden"
        >
          <input
            className="px-3 py-1 bg-black text-white outline-none"
            type="search"
          />
          <button className="border-l px-2 text-xl ">
            <IoMdSearch />
          </button>
        </form>
        <span className="text-2xl">
          <MdOutlineKeyboardVoice className="hover:text-gray-400 cursor-pointer transition duration-500" />
        </span>
      </div>

      <div className="flex gap-4 text-2xl cursor-pointer">
        <span>
          <RiVideoAddLine className="hover:text-gray-400 transition duration-500" />
        </span>
        <span>
          <FaRegBell className="hover:text-gray-400 transition duration-500" />
        </span>
        <span>
          <FaRegUserCircle className="hover:text-gray-400 transition duration-500" />
        </span>
      </div>
    </div>
  );
};

export default Header;
