import './Projects.css'
import Grid from '../components/Grid'
import ProjectCard from '../components/ProjectCard'

const Projects = () => {
    const myProjects = [
        {
            imgLink: 'https://images.unsplash.com/photo-1615494488088-43ac74d0c232?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            projectName: 'Final Project',
            infoText: 'The final project for DCI Web-Dev Course',
            technologiesUsed: 'HTML, CSS, JavaScript, React',
            gitHubLink: 'https://github.com/',
            websiteLink: 'https://github.com/',
            itemHeight: '600',
            category: 'web-dev'
        },
        {
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
            imgLink: 'https://images.unsplash.com/photo-1615494488088-43ac74d0c232?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            projectName: 'Phyto App',
            infoText: 'A simple, handy and colorful app to keep track of your projects',
            technologiesUsed: 'HTML, CSS, JavaScript, React',
            gitHubLink: 'https://github.com/',
            websiteLink: 'https://github.com/',
            itemHeight: '600',
            category: 'UI/UX'
        },
        {
            imgLink: 'https://images.unsplash.com/photo-1615494488088-43ac74d0c232?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            projectName: 'IRIX online portfolio',
            infoText: 'Website for the Architecture office IRIX based in Rotterdam',
            technologiesUsed: 'HTML, CSS, JavaScript, React',
            gitHubLink: 'https://github.com/',
            websiteLink: 'https://github.com/',
            itemHeight: '600',
            category: 'web-dev'
        },
        {
            imgLink: 'https://images.unsplash.com/photo-1615494488088-43ac74d0c232?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            projectName: 'Cabanon Concrete Retreat',
            infoText: 'Visual Identity for Cabanon in Chania, Crete',
            technologiesUsed: 'HTML, CSS, JavaScript, React',
            gitHubLink: 'https://github.com/',
            websiteLink: 'https://github.com/',
            itemHeight: '600',
            category: 'branding'
        },
        {
            imgLink: 'https://images.unsplash.com/photo-1615494488088-43ac74d0c232?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            projectName: 'Morning Glory',
            infoText: 'A non existent-library that I might never make',
            technologiesUsed: 'HTML, CSS, JavaScript, React',
            gitHubLink: 'https://github.com/',
            websiteLink: 'https://github.com/',
            itemHeight: '600',
            category: 'UI/UX'
        },
    ]

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