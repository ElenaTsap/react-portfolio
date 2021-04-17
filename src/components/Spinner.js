import './Spinner.css'


const Spinner = () => {
    return (
        <div className = 'spinner-container' style = {{overflow: 'hidden'}}>
            <div className = 'sun-element'></div>
            <div className = 'moon-element'></div>
        </div>
    )
}

export default Spinner
