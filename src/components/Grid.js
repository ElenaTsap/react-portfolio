import GridWrapper from './GridWrapper'
import { CSSGrid, layout } from 'react-stonecutter';


const Grid = ({ displayProjects }) => {    
    console.log(displayProjects);
    return (    


        <GridWrapper
            className='grid-inner'
            component="div"
            columns={2}
            columnWidth={600}
            gutterWidth={80}
            gutterHeight={80}
            layout={layout.pinterest}
            duration={800}
            easing="ease-out"
        >
            {displayProjects}
        </GridWrapper>

    )
}

export default Grid
