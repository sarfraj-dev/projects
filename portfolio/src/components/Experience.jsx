function Experience() {
  return (
    <>
      <div className="wrapperDiv experience">
        <p className="primaryText py-8 text-center	">My Experience</p>
        <div className="flex flex-col	gap-6	">
          <div className="flex justify-between leading-10	items-start	 relative  ">
            <div className="experienceFlex">
              <h2>Zencommerce India</h2>
              <p className="">March 2023 - Present</p>
            </div>
            <div className="experienceFlex ml-8">
              <h2>Web Developer & Designer</h2>
              <p>
                Utilized SASS within an e-commerce platform to build and
                customize <br />
                responsive, visually appealing, and high-performance e-commerce{" "}
                <br />
                websites.
              </p>
            </div>
          </div>

          <div className="flex justify-between leading-10	items-start	    ">
            <div className="experienceFlex">
              <h2>Top Centile</h2>
              <p className="">Jul 2022 - Jan 2023</p>
            </div>
            <div className="experienceFlex ml-8">
              <h2>Frontend Developer Intern</h2>
              <p>
                Worked on Live project of profile management, got trained on
                frontend <br /> technologies like React.JS, JavaScript, HTML5,
                CSS3, SCSS, Tailwind, Bootstrap, <br /> git, gitHub.
              </p>
            </div>
          </div>

          <div className="flex justify-between leading-10	items-start	    ">
            <div className="experienceFlex">
              <h2>Sushiladevi Deshmukh College</h2>
              <p className="">Aug 2019 - Jun 2022</p>
            </div>
            <div className="experienceFlex ml-8">
              <h2>Engineering Graduate</h2>
              <p>
                During my time in university, I served as the Cultural
                Secretary,<br /> where I successfully organized and coordinated
                various cultural events, <br />fostering a vibrant and inclusive
                campus community.
              </p>
            </div>
          </div>

          <div className="flex justify-between leading-10	items-start	    ">
            <div className="experienceFlex">
              <h2>Sushiladevi Deshmukh College</h2>
              <p className="">Jun 2017 - Mar 2019</p>
            </div>
            <div className="experienceFlex ml-8">
              <h2>H.S.C</h2>
              <p>
                A visual desginer dsesign for a variety of platoforms, may
                include internet and <br /> internet sites, games, movies,
                kioasks and wearbies. In short, they create the <br /> concepts.
              </p>
            </div>
          </div>

          <div className="progressBar">
            <div className="line"></div>
            <div className="circleLineDiv">
              <div
                className="circle"
                style={{ background: "rgb(40, 111, 108)" }}
              ></div>
            </div>
            <div className="circleLineDiv">
              <div
                className="circle"
                style={{ background: "rgb(242, 112, 78)" }}
              ></div>
            </div>
            <div className="circleLineDiv ">
              <div
                className="circle "
                style={{ background: "rgb(238, 192, 72)" }}
              ></div>
            </div>
            <div className="circleLineDiv ">
              <div
                className="circle responsivePadding"
                style={{ background: "rgb(238 72 104)" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
