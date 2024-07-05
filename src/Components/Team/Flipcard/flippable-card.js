import './flippable-card.css';

function FlippableCard(props) {
    
    return(
        <>
        <div className="card-container">
            <div className="card">
                <div className="front">

                    <div className='imageContainer' >
                        <img src={props.image} alt="" style={{
                        backgroundImage: `url(${props.background})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        height:'200px',
                        }}/> 
                    </div>
                    <h3>{props.name}</h3>
                    <p>{props.designation}</p>
                </div>
                {/* <div className="back">
                    <div className='imageContainer' >
                            <img src={props.meme} alt="" style={{
                            // backgroundImage: `url(${props.background})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            height:'200px',
                            }}/> 
                        </div>
                        
                </div> */}
            </div>
        </div>
        </>
    );
}

export default FlippableCard;