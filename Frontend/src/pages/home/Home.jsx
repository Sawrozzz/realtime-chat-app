import SideBar from '../../components/sidebar/SideBar'
import MessageBox from '../../components/messagebox/MessageBox'

const Home = () => {
  return (
    <div className='flex  justify-between gap-7  sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden ' >
     <SideBar />
     <MessageBox />
  
    </div>
  )
}

export default Home