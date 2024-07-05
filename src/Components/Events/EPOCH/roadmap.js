import React, { useEffect, useState } from 'react';

const Roadmap = () => {
  const [isScreenWidthLessThan490, setIsScreenWidthLessThan490] = useState(
    window.innerWidth < 490
  );

  useEffect(() => {
    const handleResize = () => {
      setIsScreenWidthLessThan490(window.innerWidth < 490);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const [imageWidth, setImageWidth] = useState(window.innerWidth); // Adjust the initial width as needed
//   const originalCoords = [144,161,673,305]; // replace this with your actual coordinates
  const originalImageWidth = 1712;
  useEffect(() => {
    const handleResize = () => {
      // Update the image width based on the current window width
      setImageWidth(window.innerWidth * 0.9); // You can adjust this multiplier as needed
    };

    // Attach the resize event listener
    window.addEventListener('resize', handleResize);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // The empty dependency array ensures that this effect runs only once after the initial render

  // Calculate the new coordinates based on the current image width
//   const newCoords = originalCoords.map(coord => (coord * (imageWidth / originalImageWidth)));
  const calculateNewCoords = (originalCoords) => {
    return originalCoords.map(coord => Math.round(coord * (imageWidth / originalImageWidth)));
  };
  return (
    <div className='roadmap-container' style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      // height: '100vh',
     
    }}>
      <img
        src="/EventsImages/EPOCH/roadmap.png"
        alt=""
        useMap="#image_map"
        style={{
          width: (isScreenWidthLessThan490)?'100vw':'78vw',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      />
      {/* <map name="image_map">
        <area target="" alt="" title="" href="" coords={calculateNewCoords([165,92,697,236]).join(',')} shape="rect" />
        <area target="" alt="" title="" href="" coords={calculateNewCoords([995,208,1528,353]).join(',')} shape="rect" />
        <area target="" alt="" title="" href="" coords={calculateNewCoords([1003,894,1537,1062]).join(',')} shape="rect" />
        <area target="" alt="" title="" href="" coords={calculateNewCoords([161,539,772,690]).join(',')} shape="rect" />
        <area target="" alt="" title="" href="" coords={calculateNewCoords([150,1231,683,1380]).join(',')} shape="rect" />
        <area target="" alt="" title="" href="" coords={calculateNewCoords([999,1296,1530,1439]).join(',')} shape="rect" />
        <area target="" alt="" title="" href="" coords={calculateNewCoords([478,1717,1010,1867]).join(',')} shape="rect" />
        <area target="" alt="" title="" href="" coords={calculateNewCoords([1038,2281,1572,2424]).join(',')} shape="rect" />
        <area target="" alt="" title="" href="" coords={calculateNewCoords([156,2025,688,2173]).join(',')} shape="rect" />
        <area target="" alt="" title="" href="" coords={calculateNewCoords([394,2618,926,2766]).join(',')} shape="rect" />
        <area target="" alt="" title="" href="" coords={calculateNewCoords([1146,3065,1677,3208]).join(',')} shape="rect" />
        <area target="" alt="" title="" href="" coords={calculateNewCoords([248,3062,779,3213]).join(',')} shape="rect" />
        
      </map> */}
    </div>
  );
};

export default Roadmap;
