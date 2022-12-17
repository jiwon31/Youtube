import { useEffect, useState } from "react";
import { AiFillYoutube, AiOutlineSearch } from "react-icons/ai";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function SearchHeader() {
  const [text, setText] = useState<string>("");
  const navigate = useNavigate();
  const { keyword } = useParams();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };

  useEffect(() => setText(keyword || ""), [keyword]);

  return (
    <header className="w-full flex p-4 text-2xl border-b border-zinc-600">
      <Link to="/" className="flex items-center">
        <AiFillYoutube className=" text-4xl text-brand" />
        <h1 className="ml-1 font-bold text-3xl">Youtube</h1>
      </Link>
      <form className="w-full flex justify-center" onSubmit={handleSubmit}>
        <input
          className="w-7/12 p-2 bg-black text-gray-50 outline-none"
          type="text"
          placeholder="Search..."
          value={text}
          onChange={handleChange}
        />
        <button className="bg-zinc-600 px-4">
          <AiOutlineSearch />
        </button>
      </form>
    </header>
  );
}
