import logo from './logo.svg';
import './App.css';
import HomePage from './Components/Homepage/homepage';
import EventPage from './Components/Events/Events';
import Header from './Components/Header/header';
import Footer from './Components/Footer/footer';
import EventDescription from './Components/Events/eventDescription';
import { LinksArray } from './Components/Events/EventsDetails/EventsDetails';
import Team from './Components/Team/team';
import ScrollToTop from './ScrollToTop';
import {
  HashRouter as Router,
  RouterProvider,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import ProjectsList from './Components/Projects/ProjectsList';
import Epoch from './Components/Events/EPOCH/epoch';
import ChoosRole from './Components/TechTransfer/chooseRole/chooseRole.js';
function App() {
  return (
    <>
    <Router>
    <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/team"  element={<Team />}/>
        <Route path="/projects"  element={<ProjectsList />}/>
        <Route path="/epoch"  element={<Epoch />}/>
        <Route path="/techtransfer"  element={<ChoosRole/>}/>

        {LinksArray.map((element,key)=>{
          return(
            <Route path={element.link} element={
            <EventDescription 
              key ={key}
              image={element.name.image}
              eventName={element.name.eventName}
              eventTagline={element.name.eventTagline} 
              eventDuration={element.name.eventDuration}
              startDate={element.name.startDate}
              endDate={element.name.endDate}
              deadline={element.name.deadline}
              eventVenue={element.name.eventVenue}
              meetlink={element.name.meetlink}
              tags={element.name.tags}
              eventTeamSize={element.name.eventTeamSize}
              eventDescription={element.name.eventDescription}
              Guidelines={element.name.Guidelines}
              contactOrganizers={element.name.contactOrganizers}
              registerationLink={element.name.registerationLink}
            />
          } />
          );
        })}

      </Routes>
      <Footer />
    </Router>
     </>
  );
}

export default App;
