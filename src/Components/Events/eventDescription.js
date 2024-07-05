import './eventDesc.css'
import { useState,useEffect } from 'react'
import { WhatsappShareButton,EmailShareButton,LinkedinShareButton } from 'react-share';

const EventDescription=(props)=> {
        const [days, setDays] = useState(0);
        const [hours, setHours] = useState(0);
        const [mins, setMins] = useState(0);
        const [secs, setSecs] = useState(0);
        
        const deadline = new Date(props.deadline).getTime(); // Using getTime() to get milliseconds since Jan 1, 1970
        const getTime = () => {
            const currentTime = new Date().getTime();
            const timeDifference = deadline - currentTime;
    
            if (timeDifference > 0) {
                setDays(Math.floor(timeDifference / (1000 * 60 * 60 * 24)));
                setHours(Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
                setMins(Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)));
                setSecs(Math.floor((timeDifference % (1000 * 60)) / 1000));
            } else {
                // Time has passed, display 0 for all values or handle as needed
                setDays(0);
                setHours(0);
                setMins(0);
                setSecs(0);
            }
        };
    
        useEffect(() => {
            const interval = setInterval(getTime, 1000);
            return () => clearInterval(interval);
        }, []);
    
    

    return (
      <>
        <div className="eventDescContainer">
            <div className="image-carousel" style={{
                backgroundImage: `linear-gradient( to right,rgba(17,17,27,0.8),rgba(57,57,57,0)), url(${props.image})`,

            }}>
                <h1>{props.eventName}</h1>
                <p>{props.eventTagline}</p>
                <h4>{props.eventDuration}</h4>

            </div>
            <div className="content">
                <div className="description">
                    <div className="heading">
                        <img src="/SIH/desc_logo.png" alt="" />
                        <h2>Description</h2>
                    </div>
                    {props.eventDescription.map((element,key)=>{
                        return(
                            <div key={key} dangerouslySetInnerHTML={{ __html: element }} />
                            // <p key={key}>{element}</p>
                        );
                    })}
               {(props.Guidelines.length>0)? (<div className="guidelines">
                    <h2>Guidelines</h2>
                    <ul>
                        {props.Guidelines.map((element,key)=>{
                            return(
                                <li key={key}>{element}</li>
                            );
                        })}
                    </ul>
                </div>):(<></>)}
                <div className="contact">
                        <h2>Contact the Event Organizer</h2>
                        <p>If you face any issues in registering for the event, please contact 
                        </p>
                            {props.contactOrganizers.name}
                            <a href="mailto:cyfuse@iiitd.ac.in">{props.contactOrganizers.email}</a>
                            {props.contactOrganizers.phone}


                        
            </div>

                </div>
                
                <div className="rightside">
                    <div className="details">
                        <div className="date_time">
                            <h2>Runs From</h2>
                            <ul>
                                <li>{props.startDate}</li>
                                <li>{props.endDate}</li>
                            </ul>
                        </div>
                        <div className="team_size">
                            <h2>Team Size</h2>
                            <p>{props.eventTeamSize}</p>
                        </div>
                        <div className="venue">
                            <h2>Happening at</h2>
                            {(props.meetlink===null || props.meetlink===undefined)?console.log(props.meetlink):<p>Online : <a href={props.meetlink} target="_blank" rel="noopener noreferrer">Click here</a></p>}
                            <p>{props.eventVenue}</p>
                        </div>
                        <div className="timeline">
                            <p>{console.log(props.registerationLink)}<a 
                            
                            href={props.registerationLink}
                            style={{
                                color:'#fff',
                                textDecoration:'none'
                            }}  >Register</a></p>
                            <div className="timer">
                                {days > 0 ? (
                                    <div className='time'>
                                        <p>Ends in</p>
                                        <p>{(days<10)?'0'+days:days } days</p>
                                        <p>{hours} hours</p>
                                    </div>
                                ) : hours > 0 ? (
                                    <div className='time'>
                                        <p>Ends in</p>
                                        <p>{hours} hours</p>
                                        <p>{mins} mins</p>
                                    </div>
                                ) :
                                    <div className='time'>
                                        <p>Ends in</p>
                                        <p>{mins} mins</p>
                                        <p>{secs} secs</p>
                                    </div>
                                    }
                            </div>
                        </div>
                    </div>
                    <div className="tags">
                        <h2>Tags</h2>
                        <ul className="tag">
                            {props.tags.map((value,key)=>{
                                return(
                                    <li key={key}>#{value}</li>
                                );
                            })}
                            {/* <li>#transhuman</li>
                            <li>#mechatronics</li>
                            <li>#hackathon</li>
                            <li>#enterpreunurship</li> */}
                        </ul>
                    </div>
                    <div className="share">
                        <h2>Share with friends</h2>
                        <div className="share_icons">
                            <LinkedinShareButton url={window.location.href}>
                            <i className="fab fa-linkedin"  color="#fff">
</i>
                            </LinkedinShareButton>
                            <EmailShareButton url={window.location.href}>
                            <i className="fa-regular fa-envelope"></i>
                            </EmailShareButton>
                            <WhatsappShareButton url={window.location.href}>
                                <i className="fab fa-whatsapp"  color="#fff"></i>
                            </WhatsappShareButton>
                        </div>
                    </div>
                    
                        
                </div>
            </div>
            
        </div>
        
      </>
    )
  }

export default EventDescription;