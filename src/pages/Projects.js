/* import './Projects.css' */
import Grid from '../components/Grid'
import ProjectCard from '../components/ProjectCard'

const Projects = () => {
    const myProjects = [
        {
            id: '01',
            imgLink: 'https://images.unsplash.com/photo-1593642702909-dec73df255d7?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            projectName: 'Time-tracker',
            infoText: 'A simple, handy and colorful app to keep track of your projects',
            technologiesUsed: 'HTML, CSS, JavaScript, React',
            gitHubLink: 'https://github.com/',
            websiteLink: 'https://github.com/',
            itemHeight: '400'
        },
        {
            id: '02',
            imgLink: 'https://images.unsplash.com/photo-1593642702909-dec73df255d7?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            projectName: 'Time-tracker',
            infoText: 'A simple, handy and colorful app to keep track of your projects',
            technologiesUsed: 'HTML, CSS, JavaScript, React',
            gitHubLink: 'https://github.com/',
            websiteLink: 'https://github.com/',
            itemHeight: '400'
        },
        {
            id: '03',
            imgLink: 'https://images.unsplash.com/photo-1593642702909-dec73df255d7?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            projectName: 'Time-tracker',
            infoText: 'A simple, handy and colorful app to keep track of your projects',
            technologiesUsed: 'HTML, CSS, JavaScript, React',
            gitHubLink: 'https://github.com/',
            websiteLink: 'https://github.com/',
            itemHeight: '400'
        },
    ]

    const displayProjects = myProjects.map((project)=> {
        console.log(project.id, project.projectName);
        return (
            <div key = {project.id} className = 'new-card'>
                <ProjectCard
                
                imgLink = {project.imgLink}
                projectName = {project.projectName}
                infoText = {project.infoText}
                technologiesUsed = {project.technologiesUsed}
                gitHubLink = {project.gitHubLink}
                websiteLink = {project.websiteLink}
                itemHeight={project.itemHeight}
            />
            </div>

        )
    })

    return (
        <section className = 'projects-container'>
            <div className = ' grid-container'>
                <Grid displayProjects = {displayProjects}/>
            </div>
        </section>
    )
}

export default Projects

/*     return (
        <section className = 'projects-container'>
            <div className = ' grid-container'>
            {displayProjects}
            </div>
            
        </section>
    ) */