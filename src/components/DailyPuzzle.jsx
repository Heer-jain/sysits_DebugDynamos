import Page from './Page'

const DailyPuzzle = () => {

  const props = {h1:"Daily Puzzles", l1:"You should have to solve problems daily for 30 days. If you skip for a day, you have to restart it.", l2:"According to your answer, you get points daily.", l3:"After 30 days, rewards or coupons will show in your wallet according to your points.", l4:"ou can solve a single problem in a day. Next problem can solved only on next day.", l5:"User should have to post their gift on their social media account by tagging Myntra.", src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwr75mZmmtdzRIyACGnRwLUPgqNlM4d2vJ4YY-xWmfkULC3TqDZElBw59FdwG-pqRy2mE&usqp=CAU", path:"/Puzzle"}

  return (
    <Page props={props}/>
  )
}

export default DailyPuzzle
