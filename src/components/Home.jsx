import Navbar from './Navbar'
import Box from './Box'
const Home = () => {

  const items = [{h1:"Daily Puzzles", desc:"Solve puzzles daily and get points and exiting rewards", path:"/DailyPuzzle"},
    {h1:"Daily Shopping", desc:"Order items daily and get exciting prices", path:"/DailyShopping"},
    {h1:"Fashion Show", desc:"Show your fashion expertise and win rewards", path:"/FashionShow"}
   ]

  return (
    <>
    <Navbar/>
    <div className='lg:flex gap-8 justify-center items-center p-5'>
      <div className='space-y-4'>
        <div className='text-6xl text-wrap font-bold'>Unclock Exclusive Rewards as <span className='text-red-500'>You Win</span></div>
        <div className='text-2xl text-gray-500'>Complete tasks and win exiting rewards and coupons</div>
      </div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjKH7WDZ1gIPOAyALwC25rL0y9p4X_Jl4Il28txj_22YuLVbjWcaFvHp5UICQq4s7OKCo&usqp=CAU" alt="" className='w-[70vw] h-[50vh] object-cover'/>
    </div>
    <Box items={items}/>
    
    </>
  )

}

export default Home
