import GridWrapper from './GridWrapper'
import { layout } from 'react-stonecutter';
import useMediaQuery from "./useMediaQuery";


const Grid = ({ displayProjects }) => {    
    const matches = useMediaQuery("(min-width: 680px)");

    return (   
        <div>
        {matches ? 
            <GridWrapper
                className='grid-inner'
                component="div"
                columns={2}
                columnWidth={420}
                gutterWidth={200}
                gutterHeight={80}
                layout={layout.pinterest}
                duration={800}
                easing="ease-out"
                style = {{zIndex:'0'}}
            >
                {displayProjects}
            </GridWrapper>
            : 
            <GridWrapper
            className='grid-inner'
            component="div"
            columns={2}
            columnWidth={350}
            gutterWidth={80}
            gutterHeight={0}
            layout={layout.pinterest}
            duration={800}
            easing="ease-out"
            style = {{zIndex:'0'}}
        >
            {displayProjects}
        </GridWrapper>
    }
        </div> 


    )
}

export default Grid
