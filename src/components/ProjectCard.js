import { FaGithub, FaLink} from 'react-icons/fa';

const ProjectCard = ( { projectName, imgLink, infoText, technologiesUsed, gitHubLink, websiteLink, gridColumn, key} ) => {

    return (
        <div className = 'project-card' style = {{gridColumn: gridColumn}}>

            <div className='img-container' style = {{backgroundImage: `url(${imgLink})`}}></div>
            <div className = 'info-container'>
                <div className = 'text-container'>
                    {/* <div>{projectName}</div>
                    <div>{infoText}</div>
                    <div>{technologiesUsed}</div> */}
                    <div>{technologiesUsed}</div>
                    <div>{projectName}</div>
                    <div>2021</div>
                    
                </div>
                <div className = 'links-container'>
                    <a href={gitHubLink} target='blank'><FaGithub /></a>
                    <a href={websiteLink} target='blank'><FaLink /></a>
                </div>
            </div>      
        </div>
    )
}

export default ProjectCard
