import './team.css'
import FlippableCard from './Flipcard/flippable-card';
import { Coordinators } from './TeamDetails';
import { CoreTeam } from './TeamDetails';
const Team=()=>{
    return(
        <>
            
            <div className="teamcontainer">
                <div className="quote">
                    <h1>We believe in investing in people and forming meaningful bonds</h1>
                </div>
                <div className="headings">
                    <h2>Coordinators</h2>
                    <div className="hr-container">
                        <hr />
                    </div>
                </div>
                <div className="coordinators">
                    {Coordinators.map((element,key)=>{
                        return(
                            <div className="cardholder">
                                <FlippableCard 
                                image={element.image} 
                                background={element.background}
                                name={element.name} 
                                meme={element.meme}

                                />

                            </div>
                            
                        );
                    })}
                
                </div>
                <div className="headings">
                    <h2>Heads and Leads</h2>
                    <div className="hr-container">
                        <hr />
                    </div>

                </div>
                <div className="coreteam">
                    {CoreTeam.map((element,key)=>{
                        return(
                           <div className="cardholder">
                                <FlippableCard 
                                    image={element.image} 
                                    background={element.background}
                                    name={element.name} 
                                    designation={element.designation}
                                    meme={element.meme}
                                />

                           </div>
                                
                            
                        );
                    })}
                </div>
            </div>
            
        </>
    );
}

export default Team;