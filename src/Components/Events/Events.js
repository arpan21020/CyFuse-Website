
import { Link } from "react-router-dom";
import './Events.css';
import { upcomingEvents } from "./constants";
import { pastEvents } from "./constants";
import React, { useState,useEffect } from 'react';
import { WhatsappShareButton,LinkedinShareButton } from "react-share";

const EventPage=()=>{
    const myList = ['#online', '#transhuman','#outdoor', '#transhuman']
    const [upcomingEventsList,setUpcomingEventsList]=useState([]);
    if(upcomingEvents.length>0 && upcomingEventsList.length===0){upcomingEventsList.push(upcomingEvents[0])}
    const [showLoadmore,setShowLoadmore]=useState(true);

    const handleLoadMore = () => {
        console.log("Loadmore")
        console.log(upcomingEventsList);
        setUpcomingEventsList(upcomingEvents);
        console.log(upcomingEventsList)
        // upcomingEventsList.push(upcomingEvents[1]);
        setShowLoadmore(false);
      };
    const handleLoadLess = () => {
    setUpcomingEventsList(upcomingEvents.slice(0,0));
    console.log(upcomingEventsList)
    setShowLoadmore(true);
    };

    const [currentPage, setCurrentPage] = useState(1);
const [postPerPage, setPostPerPage] = useState(4);
const [pastEventsList, setPastEventsList] = useState([]);
let flagL=true;
let flagR=true;
let totalPost=pastEvents.length;
// Assuming pastEvents is also a state or a prop that gets updated
let pages=[];
for(let i=1;i<=Math.ceil(totalPost/postPerPage);i++){
    pages.push(i);
}
useEffect(() => {
    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;
    setPastEventsList(pastEvents.slice(firstPostIndex, lastPostIndex));
}, [currentPage, postPerPage, pastEvents]);

const handleClick = (pageNumber) => {
    if(pageNumber>0 && pageNumber<=Math.ceil(totalPost/postPerPage)){
    setCurrentPage(pageNumber);
    }
};

    return(
        <>
        <div className="eventsContainer_background">
            {/* <img src="./event_background.jpg"></img> */}
        <div className="eventsContainer">
            {/* <div className="flagship_event">
                <h1 style={{
                    // textAlign: "", 
                    fontWeight: "350",
                    color:"#242565",
                    fontSize:"5em",
                    letterSpacing:"2px",
                    margin:'1em',
                }}>Participate in  the hottest competitions !</h1>
                                
            </div> */}
            <div className="upcomingEvents">
                <div className="heading">
                        <h1> Upcoming events</h1>

                        <div className="hr-container">
                            <hr />
                        </div>

                </div>
                {(upcomingEventsList.length<1)?<div className="comingsoon"
                style={
                    {
                        display: "flex",
                        justifyContent:'center',
                        fontSize:'2em',
                        color:'#999999'
                    }
                }
                ><p>Coming Soon......</p></div>:
                upcomingEventsList.map((element,key)=>
                {
                    return(
                        <div className="" key={key}>
                             <UpcomingEventCard
                            eventName={element.eventName}
                            eventDate={element.eventDate}
                            eventVenue={element.eventVenue}
                            tags={element.tags}
                            eventTeamSize={element.eventTeamSize}
                            eventLink={element.eventLink}

                            />

                        </div>
                       

                    );
                })}
                
                {showLoadmore && ( // Check if showLoadmore is true
                    <div className="load-more">
                    <p onClick={()=>handleLoadMore()}>Load More</p>
                    </div>
                )}
                {!showLoadmore && ( // Check if showLoadmore is true
                    <div className="load-more">
                    <p onClick={()=>handleLoadLess()}>Load Less</p>
                    </div>
                )}
               
                
            </div>
            <div className="pastEvents">
                <div className="heading">
                        <h1> Past events</h1>

                        <div className="hr-container">
                            <hr />
                        </div>

                </div>
                <div className="events-grid">
                    {pastEventsList.map((element,key)=>{
                        return(
                            <div className="" key={key}>
                                <div className="" key={key}>
                                <PastEventsCard
                                eventName={element.eventName}
                                eventDate={element.eventDate}
                                eventVenue={element.eventVenue}
                                tags={element.tags}
                                eventLink={element.eventLink}
                                />

                        </div>

                            </div>
                        );
                    })}
                </div>
                <div className="pagination">
                    <div className="btn" onClick={()=>handleClick(currentPage-1)}>&lt;</div>
                    {
                        pages.map((page,index)=>{
                            if(window.innerWidth < 550){
                                if(currentPage===page || currentPage+1===page){
                                    return(
                                        <div key={index} onClick={()=>handleClick(page)} 
                                        className={currentPage===page?"active-btn btn":"btn"} >{page}</div>
                                    );
                                }
                                else{
                                    return(
                                        <>
                                        </>
                                    );

                                }
                                

                            }
                            else{
                            
                            if(page===1 || page===pages.length){
                                return(
                                    <div  key={index} onClick={()=>handleClick(page)} 
                                    className={currentPage===page?"active-btn btn":"btn"} >{page}</div>
                                );
                            }
                            if (page < currentPage-1) {
                                if(flagL){
                                    flagL=false;
                                return(<span key={index}>...</span>);}
                                else{
                                    return(<span key={index}></span>);

                                }
                            }
                    
                            
                            if( page > currentPage+1){
                                if(flagR){
                                    flagR=false;
                                return(<span key={index}>...</span>);}
                                else{
                                    return(<span key={index}></span>);

                                }
                            }
                                
                            
                            return(
                                <div key={index} onClick={()=>handleClick(page)} 
                                className={currentPage===page?"active-btn btn":"btn"} >{page}</div>
                            );
                            }
                        })
                    }
                    <div className="btn" onClick={()=>handleClick(currentPage+1)}>&gt;</div>

                
                </div>

            </div>
           



        </div>
        </div>
        </>
    );
}

function PastEventsCard(props){
    const receivedList = props.tags;
    return(
        <div className="pastEventCard" style={{
            height:props.height,
            width:props.width,
            fontSize:props.fontsize,
            }}>

            <div className="eventInfo" >
                <div className="leftside">
                    
                    <h2>{props.eventName}</h2>
                    {/* <p>{props.eventDescription}</p> */}
                    <div className="eventDate">
                        <p>{props.eventDate}</p>
                    </div>
                    <div className="eventVenue">
                        <p>{props.eventVenue}</p>
                    </div>
                    <div className="tags">
                        <ul>
                            {receivedList.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>

                </div>
                

                <div className="rightside">
                    <div className="socialLinks">
                    <WhatsappShareButton url={window.location.href}>
                            <i className="fab fa-whatsapp" id="insta" color="#fff"></i>
                        </WhatsappShareButton>

                    </div>
                
                    <div className="eventLink">
                        {console.log(props.eventLink)}
                        
                        <Link to={props.eventLink}>Open</Link>
                    </div>

                </div>

               
            </div>
        </div>
    );

}

function UpcomingEventCard(props){
    const receivedList = props.tags;
    return(
        <div className="eventCard">

            <div className="eventInfo">
                <div className="leftside">
                    
                    <h2>{props.eventName}</h2>
                    {/* <p>{props.eventDescription}</p> */}
                    <div className="eventDate">
                        <p>{props.eventDate}</p>
                    </div>
                    <div className="eventVenue">
                        <p>{props.eventVenue}</p>
                    </div>
                    <div className="tags">
                        <ul>
                            {receivedList.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>

                </div>
                

                <div className="rightside">
                    <div className="socialLinks">
                        <LinkedinShareButton url={window.location.href}>
                            <i className="fab fa-linkedin" id="insta" color="#fff"></i>
                        </LinkedinShareButton>
                        <WhatsappShareButton url={window.location.href}>
                            <i className="fab fa-whatsapp" id="insta" color="#fff"></i>
                        </WhatsappShareButton>
                        {/* <i className="fab fa-telegram" id="insta" color="#fff"></i> */}

                    </div>
                    
                    <div className="eventTeamSize">
                        {(props.eventTeamSize===null || props.eventTeamSize===undefined)?<p></p>:<p>Team Size - {props.eventTeamSize}</p>}
                    </div>

                                
                    <div className="eventLink">
                        {/* <Link to={props.eventLink}>Register</Link> */}
                    </div>

                </div>

               
            </div>
        </div>
    );
}
export default EventPage