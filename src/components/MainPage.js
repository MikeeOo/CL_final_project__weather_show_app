import {useState} from "react";
import WeatherBlock from "./WeatherBlock";


const MainPage = () => {

    const [inputValue, setInputValue] = useState(``)
    const [weatherBlocks, setWeatherBlocks] = useState([])



    const handleSubmit = (e) => {
        e.preventDefault()

        setWeatherBlocks(prevState => [...prevState, inputValue])

        setInputValue(``)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="nazwa miasta" value={inputValue} onChange={e => setInputValue(e.target.value)}/>
                <button>Dodaj miasto</button>
            </form>

            {weatherBlocks.map((el, index) => <WeatherBlock key={index} el={el}/>)}
        </>
    )
}

export default MainPage