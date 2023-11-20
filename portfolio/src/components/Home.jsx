import { avtar, certificate } from "../assets";
function Home() {
  return (
    <div className="home ">
      <div className="upperElement flex justify-between	">
        <p className="primaryText">
          Hey There,
          <br />
          I&apos;m Sarfraj.
        </p>
        <p className="secondaryText">
          I built beautiful simple
          <br />
          websites, And I love what i do
        </p>
      </div>
      <div className="personImg">
        <img src={avtar} alt="" />
      </div>
      <a href="mailto:sarfrajsayyad.dev@gmail.com" className="email">
        sarfrajsayyad.dev@gmail.com
      </a>
      <div className="lowerElement flex justify-between items-center mt-36">
        <div className="flex gap-4 items-center">
          <div className="primaryText">20+</div>
          <div className="projectText leading-6	">
            Frontend <br /> Projcts build
          </div>
        </div>
        <div className="flex items-center flex-col text-center">
          <img src={certificate} alt="" />
          <p>
            CERTIFIED PROFESSIONAL <br />
            Frontend Developer
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;