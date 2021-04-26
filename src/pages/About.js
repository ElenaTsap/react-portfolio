import './About.css'
import aboutItems from '../data/aboutItems'
import Draggable from 'react-draggable';
import CursorEffect from '../components/CursorEffect'
import useMediaQuery from "../components/useMediaQuery";

const About = () => {
    const { title, textContent, styles } = aboutItems;
    const matches = useMediaQuery("(min-width: 680px)");

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
                            <div key = {index} className = 'about-item-card' style = {item.styles.mobile}>
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
