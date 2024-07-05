import { Link } from 'react-router-dom'
import './projectList.css'
import { ShowProjects } from './ShowProjects.tsx'
const ProjectCard=(props)=>{
    return(
        <>
            <div className="project_card"  style={{
    backgroundImage: `url(${props.image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
}}>
                <div className="leftside">
                    <div className="status">
                        <p>{props.status}</p>
                    </div>
                    <div className="project-name">
                        <h2>{props.name}</h2>
                    </div>
                    <div className="project-description">
                        <p>{props.description}</p>
                    </div>
                    <div className="viewDetails">
                        {/* <Link href="http://">View Details</Link> */}
                    </div>

                </div>
                {/* <div className="rightside">
                    <div className="project_card_image">
                        <img src={props.image} alt="image" />
                    </div>
                </div> */}
                
               
                
            </div>
        </>
    )

}

const ProjectsList=()=>{
    return(
        <>
            <div className="project_container">
                {/* <img id="acdb" src="./project.jpg"></img> */}
                {ShowProjects.map((element,key)=>{
                    return(
                        <ProjectCard key={key} 
                        image={element.image}
                        status={element.status}
                        name={element.projectName}
                        description={element.projectDescription}
                        />
                        
                    );
                })}
                
            </div>
        </>
    )
}

export default ProjectsList;