import { popular_Events } from "../Events/constants";
import { Link } from "react-router-dom";
import './popularEvents.css'
const PopularEvents=()=>{
    return(
    <> 
    <div className="popular-section_background">
        {/* <img id="background-for-upcoming-events"src="./event_background.jpg"></img> */}
        <div className="popular-section">
            <h1>Upcoming Events</h1>
            <div className="container">
                <div className="container-events">
                {popular_Events.map((element,key)=>{
                    return(
                    <div className="event" key={key}>
                        <div className="image-container">
                            <img src={element.image} alt="poster" style={{
                                // backgroundImage: `url(/about_img1.png)`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                            }}/>
                        </div>
                        <div className="eventName">
                            <h2>{element.eventName}</h2>
                        </div>
                        <div className="eventDate">
                            <i class="fa-regular fa-calendar"></i>
                            <p>{element.eventDate}</p>
                        </div>
                        <div className="venue">
                            <i class="fa-solid fa-location-dot"></i>
                            <p>{element.eventVenue}</p>
                        </div>
                        <div className="description">
                            <p>{element.eventDescription}</p>
                        </div>
                        {(element.isclosed===null || element.isclosed===undefined)?(<div className="show-closed">
                            <Link to={element.eventLink}>Closed</Link>
                        </div>):
                        (<div className="show-closed">
                        <Link>Closed</Link>  {/* temporary change closed to upcoming */}

                    </div>)
                        }
                      
                    </div>
                    );
                })}

                </div>
                
                <div className="more">
                    <Link to="/events" ><i class="fa-solid fa-chevron-right"></i></Link>
                </div>

            </div>

        </div>
    </div>
    </>
    );

}
export default PopularEvents;