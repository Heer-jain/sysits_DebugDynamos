import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom';


const DailyPuzzle = ({props}) => {

  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div>
      <Navbar/>
      <div className='md:flex gap-10 p-10'>
        <div className='space-y-3 md:w-[50%] text-wrap'>
            <h1 className='text-5xl font-bold'>{props.h1}</h1>
            <h2 className='text-2xl font-semibold'>Rules</h2>
            <ul className='list-disc ml-5'>
                <li>{props.l1}</li>
                <li>{props.l2}</li>
                <li>{props.l3}</li>
                <li>{props.l4}</li>
                <li>{props.l5}</li>
            </ul>
            <button onClick={() => handleClick(props.path)} className='bg-red-300 py-2 px-5 rounded-full'>Get Started</button>
        </div>
            <img src={props.src} alt="" className='w-[50vw] md:w-[30vw]'/>
        </div>
    </div>
  )
}

export default DailyPuzzle
