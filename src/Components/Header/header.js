import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./header.css";
const Header = () => {
  const [isScreenWidthLessThan630, setIsScreenWidthLessThan630] = useState(
    window.innerWidth < 630
  );
  const [dropbutton, setDropbutton] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenWidthLessThan630(window.innerWidth < 630);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className="header">
        <div className="navLeft">
          <Link to="/">
            <div
              style={{
                backgroundImage: `url(/favlogo8.png)`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                height: "50px",
                width: "26.56px", // Set the width as well
                objectFit: "contain", // Or 'contain' if you want to see the entire image
              }}
            />
          </Link>
          <Link to="/">
            <p>CyFuse</p>
          </Link>
        </div>

        {!isScreenWidthLessThan630 && (
          <div className="rightpart">
            <Link to="/epoch">EPOCH</Link>
            <ul className="nav">
              <li className="item">
                <Link to="/events" className="selected" id="home1">
                  {" "}
                  Events
                </Link>
              </li>
              {/* <li className="item">
                <Link to="/techtransfer" className="selected" id="home1">
                  {" "}
                  TechTransfer Portal
                </Link>
              </li> */}
              {/* <li className="item"><Link to="/blog" className="">  Blog</Link></li> */}
              <li className="item">
                <Link to="/projects" className="">
                  {" "}
                  Projects
                </Link>
              </li>
              <li className="item">
                <Link to="/team" className="">
                  {" "}
                  Team
                </Link>
              </li>
            </ul>
          </div>
        )}
        {isScreenWidthLessThan630 && (
          <div className="dropdown">
            <div className="rightpart2">
              <Link to="/epoch" onClick={() => setDropbutton((prev) => false)}>EPOCH</Link>
              <div
                className="dropbtn"
                onClick={() => setDropbutton((prev) => !prev)}
              >
                <i className="fa-solid fa-bars"></i>
              </div>
            </div>
            {dropbutton && (
              <ul className="drop-nav">
                <li className="item">
                  <Link to="/events" className="selected" id="home1" onClick={() => setDropbutton((prev) => !prev)}>
                    {" "}
                    Events
                  </Link>
                </li>
                {/* <li className="item"><Link to="/blog" className="">  Blog</Link></li> */}
                <li className="item">
                  <Link to="/projects" className="" onClick={() => setDropbutton((prev) => !prev)}>
                    {" "}
                    Projects
                  </Link>
                </li>
                <li className="item">
                  <Link to="/team" className="" onClick={() => setDropbutton((prev) => !prev)}>
                    {" "}
                    Team
                  </Link>
                </li>
              </ul>
            )}
          </div>
        )}
      </div>
    </>
  );
};
export default Header;
