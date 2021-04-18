import './About.css'
import Draggable from 'react-draggable';
import CursorEffect from '../components/CursorEffect'
import useMediaQuery from "../components/useMediaQuery";

const About = () => {
    const matches = useMediaQuery("(min-width: 680px)");

    const aboutItems = [
        {
            title: '',
            textContent: [
            ],
            styles: { 
                desktop : {
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    backgroundImage: 'url("https://media.giphy.com/media/WRshFdOvxJzQsL9XK5/giphy.gif")',
                    backgroundSize: 'cover'
                },
            mobile : {}
            }
        },
        {   
            title:'',
            textContent: [
                'My story starts right after my masters degree in Architecture and Engineering. ',
                'While working as an architect I founded the creative studio ‘We are still bold and beautiful’ specialized in graphic design and street-wear fashion.',
                'In 2017 I moved to Berlin where I worked as a Project Manager for a SaaS company. This is when I fell for UI/UX and developed solid digital design skills.',
                'Since 2020 I truly dedicated my efforts to become a Full-stack developer. My main goal is to join an amazing team in order to share my experience and expand my knowledge.',
            ],
            styles: { 
                desktop : {
                    width: '400px',
                    textAlign: 'left',
                    left: '35%',
                    background: 'linear-gradient(180deg, rgba(152, 197, 200, 1) 38%, rgba(243, 233, 155, 1) 100%)'
            },
                mobile : {}
            }
        },
        {
            title: 'Technologies',
            textContent: [
                'HTML',
                'CSS',
                'JavaScript',
                'Typescript',
                'React.js',
                'React Native',
                'MongoDB',
                'Express.js',
                'Node.js'
            ],
            styles: { 
                desktop : {
                    width: '240px',
                    textAlign: 'center',
                    left: '25%',
                    top: '10%',
                    background: 'linear-gradient(180deg, rgba(255, 162, 117, 1) 38%, rgba(210, 85, 239, 1) 100%)',
            },
                mobile : {}
            }
        },

        {
            title: 'Skills',
            textContent: [
                'Front-end development',
                'Mobile Apps',
                'Wireframing',
                'Prototyping',
                'Graphic Design',
                'Branding'
            ],
            styles: { 
                desktop : {
                    width: '160px',
                    textAlign: 'center',
                    left: '35%',
                    top: '40%',
                    background: 'linear-gradient(180deg, rgba(152, 216, 141, 1) 8%, rgba(0, 235, 207, 1) 100%)'
            },
                mobile : {}
            }
        },
        {
            title: 'Tools',
            textContent: [
                'Figma',
                'Sketch',
                'Adobe Suite',
                'Invision',
                'Treejack'
            ],
            styles: { 
                desktop : {
                    width: '100px',
                    textAlign: 'center',
                    left: '55%',
                    top: '20%',
                    background: 'linear-gradient(180deg, rgba(255, 0, 68, 1) 8%, rgba(255, 222, 132, 1) 100%)'
            },
                mobile : {}
            }
        },

    ]

    const displayAboutItems = aboutItems.map((item, index)=> {
        const content = item.textContent.map((paragraph) => {
            return(<p  data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="top-bottom">{paragraph}</p>)
        })
        return (
            <div>
                {matches ? <Draggable>
                                <div key = {index} className = 'about-item-card' style = {item.styles.desktop}>
                                    <h4 className = 'about-item-title'>{item.title}</h4>
                                    <p>{content}</p>
                                </div>
                            </Draggable>
                            : <Draggable>
                            <div key = {index} className = 'about-item-card' style = {item.styles.desktop}>
                                <h4 className = 'about-item-title'>{item.title}</h4>
                                <p>{content}</p>
                            </div>
                        </Draggable>

                
            }
            </div>



        )
    })

    return (
        <section className = 'about-container'>
            {displayAboutItems}
            <CursorEffect>
                <div className = 'cv-link'>
                    <a href='https://drive.google.com/file/d/1VEWZ5UL7Wqn-GEq2iurkVL9Avp4Dvxoq/view?usp=sharing' target = 'blank'>my full CV_____</a>
                </div>
            </CursorEffect>
        </section>
    )
}

export default About
