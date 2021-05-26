import './Projects.css'
import Grid from '../components/Grid'
import ProjectCard from '../components/ProjectCard'
import myProjects from '../data/myProjects'

const Projects = () => {

    const displayProjects = myProjects.map((project, index)=> {
        return (
            <div key = {index} className = 'new-card'>
                <ProjectCard
                    projectData = {myProjects[index]}
            />
            </div>
        )
    })

    return (
        <section className = 'projects-container'>
            <div className = 'grid-container'>
                <Grid displayProjects = {displayProjects}/>
            </div>
        </section>
    )
}

export default Projects