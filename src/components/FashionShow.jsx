import Page from './Page'

const FashionShow = () => {

  const props = {h1:"Fashion Show", l1:"You have to upload a video of yourself for fashion show", l2:"Users can vote to your videos", l3:"After 30 days, who has highest vote won the competition", l4:"Winner gets the exiciting gifts", l5:"Winner should have to upload their winning certificate to their social media account by tagging Myntra", src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW3NA_rdMlod_CmiwR7lIEWcc0p0WDPtO2yQ&s", path:"/Show"}

  return (
    <Page props={props}/>
  )
}

export default FashionShow
