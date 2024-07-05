import "./box.css";
const Box = (props) =>{
    return(
        <div className="box-1 box">
                <div className="Box1_heading Box_heading">
                  <h3>{props.heading}</h3>
                </div>
                <div className="Box1_content Box_content">
                  <p>
                  {props.content}
                  </p>
                </div>
                {/* <div className="apply_button_div">
                <div className="apply_button">
                  <a href="https://www.google.com/" target="_blank">APPLY</a>
                </div>
                </div> */}
                {/* {props.id === 6 ? (
                <div className="apply_button_div">
                    <div className="apply_button">
                        <a href="https://unstop.com/hackathons/epoch-riise-indraprastha-institute-of-information-technology-iiit-delhi-919987" target="_blank">Register</a>
                    </div>
                </div>
            ) : null} */}
              </div>
    )
}
export default Box;