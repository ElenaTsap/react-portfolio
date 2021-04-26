import { FaGithub, FaLink} from 'react-icons/fa';
import './ProjectCard.css'
import CursorEffect from './CursorEffect'

const ProjectCard = ( { projectData } ) => {

    const categoryColor = (category) => {
        let color;
        switch (category) {
            case 'web-dev':
                color = 'radial-gradient(circle, rgba(235,244,254,1) 0%, rgba(119,119,119,1) 75%)'
                break;
            
            case 'branding':
                color = 'radial-gradient(circle, rgba(231,216,208,1) 4%, rgba(115,108,99,1) 100%)'
                break;
            
            case 'UI/UX':
                color = 'radial-gradient(circle, rgba(219,208,231,1) 4%, rgba(114,99,115,1) 100%)'
                break;
    
            default:
                color = 'white'
            break;
    }
    return color;
}

    return (
        <div key = {projectData.key} className = 'project-card' data-aos="fade-up" data-aos-duration="1000" itemHeight =  {projectData.itemHeight}>
            <div className='img-container' style = {{backgroundImage: `url(${projectData.imgLink})`}}></div>
            <div className='banner' style = {{background: categoryColor(`${projectData.category}`)}}>{projectData.category}</div>
            <div className = 'info-container'>
                <div className = 'text-container'>
                    <div>{projectData.projectName}</div>
                    <div>{projectData.infoText}</div>
                    <div>{projectData.technologiesUsed}</div>
                </div>
                <div className = 'links-container'>
                    <CursorEffect><a href={projectData.gitHubLink} target='blank'>{projectData.gitHubLink != '' ? <FaGithub className = 'fa-icon'/> : ''}</a></CursorEffect>
                    <CursorEffect><a href={projectData.websiteLink} target='blank'><FaLink className = 'fa-icon'/></a></CursorEffect>
                </div>
            </div>      
        </div>
    )
}

export default ProjectCard
