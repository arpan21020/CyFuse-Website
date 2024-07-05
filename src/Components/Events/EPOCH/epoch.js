import './epoch.css'
import Roadmap from './roadmap';
import EpochDetails from './epochDetails';
import { useState, useEffect } from "react";
const Epoch=()=>{

    const originalWidth = 1712;
const currentWidthPercentage = 100; // the current width percentage

const calculateNewCoords = (originalCoords, originalWidth, currentWidthPercentage) => {
  const scaleFactor = currentWidthPercentage / 100;
  const newCoords = originalCoords.map(coord => Math.round(coord * scaleFactor));
  return newCoords.join(',');
};
const [isScreenWidthLessThan630, setIsScreenWidthLessThan630] = useState(
    window.innerWidth < 630
  );

  useEffect(() => {
    const handleResize = () => {
      setIsScreenWidthLessThan630(window.innerWidth < 630);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

// Example of usage
const originalCoords = [671, 307, 137, 164]; // replace this with your actual coordinates
const newCoords = calculateNewCoords(originalCoords, originalWidth, currentWidthPercentage);

    return(
        <>
        <div className="epoch-container">
            <div className="img_side">
                        <img src={isScreenWidthLessThan630 ? "/EventsImages/EPOCH/image4.png" : "/EventsImages/EPOCH/image2.png"} alt="" style={{
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            height: isScreenWidthLessThan630 ? 'auto' : '100vh',
                            width:"100%",
                        }}/>
            </div>
            <Roadmap />
            <EpochDetails />
            

           
        </div>
        </>
    );
}
export default Epoch