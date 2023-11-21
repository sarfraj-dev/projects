
function Footer() {
  return (
    <>
      <div className="wrapperDiv flex footer">
        <div className="footerLeft">
            <p className="primaryText">Let&apos;s make something <br /> amazing together.</p>
            <p className="primaryText mt-12">Start by <a href="mailto:sarfrajsayyad.dev@gmail.com" style={{color:"orange"}} className="underline">saying hi</a></p>
        </div>
        <div className="footerRight">
            <p className="secondaryText">Information</p>
            <p>Airoli, Navi Mumbai, Maharashtra</p>
            <ul className="flex flex-col gap-8 mt-4">
                <li>
                <a href="https://www.linkedin.com/in/sarfrajsayyad/">Linkedin</a>
                </li>

                <li>
                <a href="https://github.com/sarfraj-dev">Github</a>
                </li>
                <li><a href="tel:8433885001">8433885001</a></li>
                <li><a href="">Resume</a></li>

            </ul>
        </div>
        
      </div>
    </>
  )
}

export default Footer
