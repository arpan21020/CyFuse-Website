import './footer.css'
import { Link } from "react-router-dom";

const Footer=()=>{
    return(
        <>
            <div className="footer">
                <div className="footer-container">
                    <div className="column1" id="foot">
                    <div className='imageContainer' >
                    <Link to='/' ><img src="/logo2.png" alt="" style={{
                                // backgroundImage: `url(/about_img2.png)`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                                // height: '100px'
                            }}/></Link> </div>
                            <div className="content" id="foot">
                                <h2><Link to="/" >CyFuse</Link></h2>
                                <div className="address">
                                    <p>IIIT Delhi, Okhla Industrial,Phase-III,</p>
                                    <p>New Delhi-110020</p>
                                </div>
                                
                            </div>
                    </div>
                    <div className="column2" id="foot">
                        <p>CONNECT WITH US</p>
                        <div className="logos">
                            <a href="https://www.linkedin.com/company/cyfuse/" rel="noreferrer" target="_blank">
                                <i className="fab fa-linkedin" id="insta" color="#fff"></i>
                            </a>
                            <a href="https://chat.whatsapp.com/KmTtVVAQiAK7NAquDaQYoG" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-whatsapp" id="insta" color="#fff"></i>
                            </a>
                            <a href="mailto:cyfuse@sc.iiitd.ac.in"><i class="fa-solid fa-envelope"></i></a>
                            <a href="https://www.instagram.com/cyfuse_iiitd/" rel="noreferrer" target="_blank">
                                <i className="fab fa-instagram" id="insta" color="#fff"></i>
                            </a>
                        </div>
                    </div>
                    <div className="column3" id="foot">
                        <p>CLUB</p>
                        <ul>
                            <li className="item"><Link to="/events" className="selected">  Events</Link></li>
                            {/* <li className="item"><Link to="/blog" className="">  Blog</Link></li> */}
                            <li className="item"><Link to="/projects" className="">  Projects</Link></li>
                            <li className="item"><Link to="/team" className=""> Meet the Team</Link></li>
                        </ul>

                    </div>
                    <div className="column4" id="foot">
                        <p>CONTACT US</p>
                        <a href="mailto:cyfuse@sc.iiitd.ac.in" rel="noreferrer" target="_blank">cyfuse@sc.iiitd.ac.in</a>
                    </div>

                </div>
                <div className="hr-container">
                    <hr/>
                </div>
                <div className="copyright">
                    <p>&copy; 2024 CyFuse. All rights reserved.</p> 
                </div>

            </div>
            

        </>
    );
}
export default Footer;