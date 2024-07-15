import { useNavigate } from 'react-router-dom';

const Box = ({ items }) => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div className="space-y-5 md:space-y-0 md:flex gap-10 md:mx-auto">
      {items.map((item, index) => (
        <div key={index} className='bg-red-200 border border-black w-80 p-5 space-y-3 rounded-lg mx-auto hover:cursor-pointer hover:shadow-black hover:shadow-lg' onClick={() => handleClick(item.path)}>
          <h1 className='text-2xl font-bold'>{item.h1}</h1>
          <p>{item.desc}</p>
          <button className='bg-red-600 text-white p-2 rounded-full'>Get Started</button>
        </div>
      ))}
    </div>
  );
}

export default Box;
