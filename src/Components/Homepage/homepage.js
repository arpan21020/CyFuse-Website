import './homepage.css'
import { Link } from "react-router-dom";
import PopularEvents from './popularevents';
const HomePage=()=>{
    return(
        <>
        <div className="landingpage">
            <div className="leftside">
                <h2> Welcome to</h2>
                <h1>CyFuse</h1>
                <h4>Unleashing innovation, where the realms of</h4>
                <h4>creativity interwine with technology</h4>
                <div className="joinnow"><a href='https://docs.google.com/forms/d/1d8FtTLKhkvhOtefv80Wbo7f-fIVVWZxz-rQNU8WyCD8/viewform?ts=659f86c1&edit_requested=true'>Join Now</a></div>
            </div>
            <div className="rightside">
            <div className='imageContainer' >
                    <img src="/main_logo.png" alt="" style={{
                    // backgroundImage: `url(/main_logo.png)`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}/> </div>
            </div>
        </div>
        <div className="aboutus">
            <div className="leftside">
                <div className="aboutus_title">
                    
                    <h1>About Us</h1>
                    <div className='imageContainer1' >
                            <img src="/about_img2.png" alt="" style={{
                            backgroundImage: `url(/about_img2.png)`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            height: '60px',
                        }}/> 
                    </div>
                    
                </div>
                
                <div className='imageContainer' >
                        <img src="/about_img1.png" alt="" style={{
                        // backgroundImage: `url(/about_img1.png)`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                    }}/> 
                </div>
            </div>

            <div className="rightside">
                
                <div className="about_content">
                    <p>
                    An ultimate tech club where we're all about fusing diverse technologies and domains to create groundbreaking innovations!  From blending cutting-edge software with the latest hardware to exploring the intersection of different fields, CyFuse is your go-to hub for pushing the boundaries of what's possible in the tech world. Join us on this exciting journey of creativity, collaboration, and innovation. Let's fuse ideas and build the future together! 
                        
                    </p>
                    <br />
                    <br />
                    <p>
                    Cheers, CyFuse
                    </p>

                </div>
            </div>    
        </div>
        < PopularEvents/>
        

        </>
    );
}
export default HomePage