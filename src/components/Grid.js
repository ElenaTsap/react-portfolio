import GridWrapper from './GridWrapper'
import { CSSGrid, layout } from 'react-stonecutter';
import useMediaQuery from "./useMediaQuery";


const Grid = ({ displayProjects }) => {    
    const matches = useMediaQuery("(min-width: 680px)");

    return (    
        <GridWrapper
            className='grid-inner'
            component="div"
            columns={2}
            
            columnWidth={matches ? '600' : '350'}
            gutterWidth={80}
            gutterHeight={80}
            layout={layout.pinterest}
            duration={800}
            easing="ease-out"
            style = {{zIndex:'0'}}
        >
            {displayProjects}
        </GridWrapper>

    )
}

export default Grid
