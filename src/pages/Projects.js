import './Projects.css'
import Grid from '../components/Grid'
import ProjectCard from '../components/ProjectCard'

const Projects = () => {
    const myProjects = [
        {
            id: '01',
            imgLink: 'https://images.unsplash.com/photo-1615494488088-43ac74d0c232?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            projectName: 'Time-tracker',
            infoText: 'A simple, handy and colorful app to keep track of your projects',
            technologiesUsed: 'HTML, CSS, JavaScript, React',
            gitHubLink: 'https://github.com/',
            websiteLink: 'https://github.com/',
            itemHeight: '600',
            category: 'web-dev'
        },
        {
            id: '02',
            imgLink: 'https://images.unsplash.com/photo-1615494488088-43ac74d0c232?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            projectName: 'Time-tracker',
            infoText: 'A simple, handy and colorful app to keep track of your projects',
            technologiesUsed: 'HTML, CSS, JavaScript, React',
            gitHubLink: 'https://github.com/',
            websiteLink: 'https://github.com/',
            itemHeight: '600',
            category: 'web-dev'
        },
        {
            id: '03',
            imgLink: 'https://images.unsplash.com/photo-1615494488088-43ac74d0c232?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            projectName: 'Time-tracker',
            infoText: 'A simple, handy and colorful app to keep track of your projects',
            technologiesUsed: 'HTML, CSS, JavaScript, React',
            gitHubLink: 'https://github.com/',
            websiteLink: 'https://github.com/',
            itemHeight: '600',
            category: 'UI/UX'
        },
        {
            id: '04',
            imgLink: 'https://images.unsplash.com/photo-1615494488088-43ac74d0c232?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            projectName: 'Time-tracker',
            infoText: 'A simple, handy and colorful app to keep track of your projects',
            technologiesUsed: 'HTML, CSS, JavaScript, React',
            gitHubLink: 'https://github.com/',
            websiteLink: 'https://github.com/',
            itemHeight: '600',
            category: 'web-dev'
        },
        {
            id: '05',
            imgLink: 'https://images.unsplash.com/photo-1615494488088-43ac74d0c232?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            projectName: 'Time-tracker',
            infoText: 'A simple, handy and colorful app to keep track of your projects',
            technologiesUsed: 'HTML, CSS, JavaScript, React',
            gitHubLink: 'https://github.com/',
            websiteLink: 'https://github.com/',
            itemHeight: '600',
            category: 'branding'
        },
        {
            id: '06',
            imgLink: 'https://images.unsplash.com/photo-1615494488088-43ac74d0c232?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            projectName: 'Time-tracker',
            infoText: 'A simple, handy and colorful app to keep track of your projects',
            technologiesUsed: 'HTML, CSS, JavaScript, React',
            gitHubLink: 'https://github.com/',
            websiteLink: 'https://github.com/',
            itemHeight: '600',
            category: 'web-dev'
        },
    ]

    const displayProjects = myProjects.map((project)=> {

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
                category = {project.category}
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