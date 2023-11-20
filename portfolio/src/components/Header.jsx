
function Header() {
  return (
    <>
    <div className="header flex justify-between	items-center">
      <div className="logo">Sarfraj Sayyad</div>
      <div>
        <ul className="uppercase flex gap-x-6 items-center">
            <li><a href="">Home</a></li>
            <li><a href="">About me</a></li>
            <li><a href="">portfolio</a></li>
            <li><a href="">skills</a></li>
            <li><a href="">Experience</a></li>
            <li className="flex justify-start gap-x-5 items-center">
                <a href="tel:8433885001"><p>8433885001</p></a>
                <a href="tel:8433885001">
                <svg className="headerCallIcon" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="40px" width="40px" xmlns="http://www.w3.org/2000/svg"><path d="M16.57 22a2 2 0 0 0 1.43-.59l2.71-2.71a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0l-1.6 1.59a7.55 7.55 0 0 1-3-1.59 7.62 7.62 0 0 1-1.59-3l1.59-1.6a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0L2.59 6A2 2 0 0 0 2 7.43 15.28 15.28 0 0 0 6.3 17.7 15.28 15.28 0 0 0 16.57 22zM6 5.41 8.59 8 7.3 9.29a1 1 0 0 0-.3.91 10.12 10.12 0 0 0 2.3 4.5 10.08 10.08 0 0 0 4.5 2.3 1 1 0 0 0 .91-.27L16 15.41 18.59 18l-2 2a13.28 13.28 0 0 1-8.87-3.71A13.28 13.28 0 0 1 4 7.41zM20 11h2a8.81 8.81 0 0 0-9-9v2a6.77 6.77 0 0 1 7 7z"></path><path d="M13 8c2.1 0 3 .9 3 3h2c0-3.22-1.78-5-5-5z"></path></svg>
                </a>
                </li>
        </ul>
      </div>
      <div className="openNav"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z"></path></svg></div>
      </div>
    </>
  )
}

export default Header
