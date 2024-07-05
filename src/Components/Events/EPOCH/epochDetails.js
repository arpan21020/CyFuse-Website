import "./epochDetails.css";
import Box from "./box"
const EpochDetails = () => {


  
  return (
    <>
      {/* <h1>hello epoch</h1> */}
      <div className="epoch_container">
        <div className="upper_part">
          <div className="other_than_tags">
            <div className="left_part_upper">
              <div className="img_side">
                <img
                  src="/EventsImages/EPOCH/image3.png"
                  alt=""
                  style={{
                    // backgroundImage: url(/main_logo.png),
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    // height:'100vh',
                    // width:"100%",
                    // borderRadius:'20px',
                    // padding:'0em',
                  }}
                />
              </div>
            </div>
            <div className="right_part_upper">
              <div className="epoch_heading">
                <h2>EPOCH : Hack The Hackathon Code</h2>
              </div>
              <div className="epoch_info">
                <div className="1st_line_epoch_info lines">
                  <img
                    src="/EventsImages/EPOCH/trophy_logo.png"
                    alt=""
                    style={{
                      // backgroundImage: url(/main_logo.png),
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      // height:'100vh',
                      // width:"100%",
                      // borderRadius:'20px',
                      // padding:'0em',
                    }}
                  />
                  <p id="Epoch">Epoch</p>
                </div>
                <div className="2nd_line_epoch_info lines">
                  <img
                    src="/EventsImages/EPOCH/building_logo.png"
                    alt=""
                    style={{
                      // backgroundImage: url(/main_logo.png),
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      height: "21.6px",
                      width: "22px",
                      // borderRadius:'20px',
                      // padding:'0em',
                    }}
                  />
                  <p>
                    Indraprastha Institute of Information and Technology, Delhi
                  </p>
                </div>
                <div className="3rd_line_epoch_info lines">
                  <img
                    src="/EventsImages/EPOCH/location_logo.png"
                    alt=""
                    style={{
                      // backgroundImage: url(/main_logo.png),
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      // height:'100vh',
                      // width:"100%",
                      // borderRadius:'20px',
                      // padding:'0em',
                    }}
                  />
                  <p id="Offline">Offline</p>
                </div>
              </div>
            </div>
          </div>
          <div className="tags">
            <p>#Coding Challenge</p>
            <p>#Hackathon</p>
          </div>
        </div>
        <div className="lower_part">
          <div className="heading_lower_part">
            <div className="style_element"></div>
            <div className="main-heading">
              <h3 className="heading_text">
                EPOCH - Track: Stages and Timelines
              </h3>
            </div>
          </div>
          <div className="body_lower_part">
            <div className="description_container_body_lower_part">
              <div className="Box-1">
              <Box id={1} heading="HackTrailer : Faculty Problems Casethon" content="On January 22nd, our recent casethon delved into genuine challenges faced by faculty. We listened to frustrations, from administrative tasks to improving classroom engagement. The collaboration was focused, with vibrant energy."/>
              </div>
              <Box id={2} heading="HackStart : Workshop intro to EPOCH" content="we've got an introductory session lined up for January 29th as part of the Epoch Series. It's a chill opportunity to grasp what Epoch is all about and how it can amp up your journey. We'll chat about the perks, benefits, and opportunities in a laid-back way, no unnecessary hype, promise!" />
              <Box id={3} heading="HackInspect: Problem Identification and  Analysis for hackathons" content="Join us on February 5th for the HackInspect Workshop! Explore the fundamentals of problem identification in our interactive session. Learn effective approaches and fresh perspectives on recognizing and understanding challenges. Let's simplify the art of problem identification together!" />
              <Box id={4} heading="HackSolve: Problem solving techniques and finding solutions" content="Discover the path from problem to solution at Epoch HackSolve on February 12th!  Join us for dynamic workshops and interactive sessions, where you'll explore ideation and problem-solving strategies. Get ready to unleash your creativity and unlock breakthroughs! 
" />
              <Box id={5} heading="HackIdeate:Ideathon" content="Get ready to present your groundbreaking ideas at HackIdeate on February 19th! Join us for an exciting event igniting creativity and opportunity. Don't miss out on this chance to showcase your brilliance and make waves in the world of innovation!" />
              <Box id={6} heading="EPOCH: Hackathon" content={<span>Ready to hack the hackathon code and make your mark in the tech world? Join Epoch 5: Hackathon for an exhilarating coding experience. Compete for prizes worth ₹1 Lakh+ and gain valuable internship opportunities. Don't miss out - register today! Event dates: March 15th and 16th.<br></br> Follow us on Instagram , LinkedIn , etc using our  <a href="https://linktr.ee/CyFuse">LinkTree</a>  </span>} />
              <Box id={7} heading="HackRewind: Hackathon 2.0" content=" Spark your genius at IIITD's ultimate hackathon! Dive into innovation solo or team up for greatness—online or offline, the choice is yours!" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default EpochDetails;
