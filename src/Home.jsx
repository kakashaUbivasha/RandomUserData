import Slider from "./customInt/Slider.jsx";
import Input from "./customInt/Input.jsx";
import Button from "./customInt/Button.jsx";
import {useState} from "react";
import PaginationTable from "./components/PaginationTable.jsx";
function Home(){
    const [rangeSlider, setRangeSlider] = useState(0)
    const [seed, setSeed] = useState(1)
    const [languageFaker, setLanguageFaker] = useState('fakerEN')
    const handleChange = (event) => {
        let newValue = event.target.value
        if (newValue < 0) newValue = 0;
        if (newValue > 1000) newValue = 1000;
        setRangeSlider(newValue);
    };
    function handleSliderChange(e){
        setRangeSlider(e)
    }
    function handleSeed(e){
        setSeed(parseInt(e.target.value))
    }
    function randomSeed(){
        const randomNumber = Math.random();
        let rand  = Math.floor(randomNumber * Number.MAX_SAFE_INTEGER);
        setSeed(rand)
        return rand
    }
    const counties = [
        {name:"UA", locale: "fakerEN"},
        {name:"UK", locale: "fakerUK"},
        {name:"RUS", locale: "fakerRU"},
    ]
    const handleSelect = (e) => {
        const selectedCountry = e.target.value;
        const selectedLocale = counties.find(country => country.name === selectedCountry)?.locale || 'fakerEN';
        setLanguageFaker(selectedLocale);
        console.log(languageFaker);
    };

    return(
        <>
            <div className="d-flex justify-content-between m-auto" style={{width:"1200px"}}>
            <div className="d-flex flex-column justify-content-start">
            <Slider
            value={rangeSlider}
            onChange={handleSliderChange}
            />
            <Input
                value={rangeSlider}
                onChange={handleChange}
                inputType="number"
                placeholder="enter error rate from 0 to 1000"
                min = "0"
                max = "1000"
            />
            </div>
                <div className="my-auto">
                    <select onChange={handleSelect} name="select" className="form-select " style={{width:"200px", height:"50px"}}>
                        <option value="UA">United State</option>
                        <option value="UK">France</option>
                        <option value="RUS">Russia</option>
                    </select>
                </div>
            <div className="d-flex flex-column">
            <Input
                value={seed}
                inputType="number"
                onChange={handleSeed}
                placeholder="Enter your seed"
            />
                <Button onClick={randomSeed}>
                    Get random seed
                </Button>
            </div>
            </div>
            <PaginationTable
            seed={seed}
            probability={rangeSlider}
            fakerLang={languageFaker}
            setProbability={setRangeSlider}
            />

        </>
    )
}
export default Home