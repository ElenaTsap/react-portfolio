import './Grid.css'
import GridWrapper from './GridWrapper'
import { CSSGrid, layout } from 'react-stonecutter';

const Grid = () => {    
    return (           
        <GridWrapper
            className='grid-container'
            component="div"
            columns={1}
            columnWidth={200}
            gutterWidth={20}
            gutterHeight={5}
            layout={layout.pinterest}
            duration={800}
            easing="ease-out"
        >
            <div key="A" itemHeight={200}>A</div>
            <div key="B" itemHeight={100}>B</div>
            <div key="C" itemHeight={100}>C</div>
            <div key="D" itemHeight={100}>D</div>
            <div key="E" itemHeight={100}>E</div>
            <div key="F" itemHeight={100}>F</div>
        </GridWrapper>
    )
}

export default Grid
