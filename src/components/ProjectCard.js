import { FaGithub, FaLink} from 'react-icons/fa';
import './ProjectCard.css'
import CursorEffect from './CursorEffect'

const ProjectCard = ( { projectName, imgLink, infoText, technologiesUsed, gitHubLink, websiteLink, key, itemHeight, category} ) => {

    const categoryColor = (category) => {
        let color;
        switch (category) {
            case 'web-dev':
                color = '#C4C4C4'
                break;
            
            case 'branding':
                color = 'white'
                break;
            
            case 'UI/UX':
                color = '#A67C52'
                break;
    
            default:
                color = 'black'
            break;
    }
    return color;
}

    return (
        <div key = {key} className = 'project-card' data-aos="fade-up" data-aos-duration="1000" itemHeight =  {itemHeight}>

                <div className='img-container' style = {{backgroundImage: `url(${imgLink})`}}></div>
                <div className='banner' style = {{backgroundColor: `${categoryColor(category)}`}}>{category}</div>

            
            <div className = 'info-container'>
                <div className = 'text-container'>
                    <div>{projectName}</div>
                    <div>{infoText}</div>
                    <div>{technologiesUsed}</div>
                </div>
                <div className = 'links-container'>
                    <CursorEffect><a href={gitHubLink} target='blank'><FaGithub className = 'fa-icon'/></a></CursorEffect>
                    <CursorEffect><a href={websiteLink} target='blank'><FaLink className = 'fa-icon'/></a></CursorEffect>
                </div>
            </div>      
        </div>
    )
}

export default ProjectCard
