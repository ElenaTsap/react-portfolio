import './Grid.css'
import GridWrapper from './GridWrapper'
import { CSSGrid, layout } from 'react-stonecutter';


const Grid = ({ displayProjects }) => {    
    console.log(displayProjects);
    return (    


        <GridWrapper
            className='grid-inner'
            component="div"
            columns={3}
            columnWidth={450}
            gutterWidth={40}
            gutterHeight={40}
            layout={layout.pinterest}
            duration={800}
            easing="ease-out"
        >
            {displayProjects}
        </GridWrapper>

    )
}

export default Grid
