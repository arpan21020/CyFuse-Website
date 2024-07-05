import { Link } from "react-router-dom";
import { useState ,useEffect} from "react";
import "./chooseRole.css";

const ChoosRole = () => {
   return <>
   <div className="portal-container-signup-page">
    <div className="portal-sign-up">
      <h1>Join as a client or student</h1>
      <div className="portal-choose-role-container">
        <div className="portal-choose client">
          <div className="head">
            <span className="icon">
              <img src="./Tech-tramsfer/client-logo.png" alt="client icon" />
            </span>
            <span className="check_as_client">
              {/* i want to make a circle here so that when i click on this client side it becomes blue */}
              <i class="fa-regular fa-circle"></i>
            </span>
          </div>
          <div className="text">
          I’m a client hiring for a project
          </div>
        
        </div>
        <div className="portal-choose student">
        <div className="head">
            <span className="icon">
              <img src="./Tech-tramsfer/student-logo.png" alt="student icon" />
            </span>
            <span className="check_as_client">
            <i class="fa-regular fa-circle"></i>
            </span>
          </div>
          <div className="text">
        I’m a student looking for work
        </div>
        </div>
      </div>
    </div>
   </div>
   </>
}
export default ChoosRole;

