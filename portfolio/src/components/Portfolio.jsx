import { showCase5 } from "../assets"

function Portfolio() {
  return (
    <>
    <section className="wrapperDiv">

<div className="flex justify-between flex-wrap items-end mb-7">
    <div>
    <p className="primaryText">My Latest Works</p>
    <p className="">Perfect solution for Frontend Needs</p>
</div>
<a href="https://github.com/sarfraj-dev/projects" className="explore">Explore More Works</a>
</div>

<div className="projectImg flex justify-around flex-wrap gap-9">
    <a href="">
        <img src={showCase5} alt="" />
    </a>
    <a href="">
        <img src={showCase5} alt="" />
    </a>
    <a href="">
        <img src={showCase5} alt="" />
    </a>  
</div>


    </section>
      
    </>
  )
}

export default Portfolio
