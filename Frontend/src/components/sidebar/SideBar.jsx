import SearchBar from './SearchBar'
import ChatList from './ChatList'

const SideBar = () => {
  return (
    <>
      <div className='flex flex-col'>
        <SearchBar />
        <ChatList />
      </div>
    </>
  );
}

export default SideBar
