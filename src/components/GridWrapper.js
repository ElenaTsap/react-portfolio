import { CSSGrid, measureItems, makeResponsive } from 'react-stonecutter';

const GridWrapper = makeResponsive(measureItems(CSSGrid), {
    maxWidth: 1920,
    minPadding: 100
});

export default GridWrapper
