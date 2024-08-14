import { IoIosSearch } from "react-icons/io";
import { useState } from "react";
import useConversation from "../../storeZustand/useConversation";
import { toast } from "react-hot-toast";
import useGetConversation from "../../hooks/useGetConversation";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversation();
  const handleSubmit = (e) => {
    console.log("clicked");
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error("Search query must be at least 3 characters long");
    }

    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else toast.error("No conversation found");
  };

  return (
    <>
      <form className="flex flex-col gap-4 mb-4" onSubmit={handleSubmit}>
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit" className="">
            <IoIosSearch height={35} width={35} />
          </button>
        </label>
      </form>
    </>
  );
};

export default SearchBar;
