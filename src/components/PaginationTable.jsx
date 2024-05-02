import { useEffect, useState } from 'react';
import axios from 'axios';
import UserInfo from "./UserInfo.jsx";
import PropTypes from "prop-types";

function TableWithPagination({ seed, probability,fakerLang, setProbability}) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [lang, setLang] = useState('fakerEN')
    const [page, setPage] = useState(1)
    const [count, setCount] = useState(undefined)
    const [currentSeed, setCurrentSeed] = useState(seed);
    const [currentProbability, setCurrentProbability] = useState(probability)
    const fetchData = async (seed, page, probability,fakerLang) => {
        setLoading(true);
        try {
            console.log(page, seed, probability)
            const response = await axios.put(`http://localhost:3000/users?seed=${seed}&page=${page}&probability=${probability}&loc=${fakerLang}&count=${count}`);
            console.log(response.data)
            setData(prevData => [...prevData, ...response.data]);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        setLoading(false);
    };

    useEffect(() => {
        console.log('lolo')

        if (seed !== currentSeed) {
            setData([]);
            setCurrentSeed(seed);
            setProbability(0)
            setPage(1)
            setCount(undefined)
        }
        else if(fakerLang !== lang){
            setData([]);
            setLang(fakerLang)
            setProbability(0)
            setPage(1)
            setCount(undefined)
        }
        else if(probability !== currentProbability){
            setData([]);
            setCurrentProbability(probability)
            setPage(1)
            setCount(undefined)
        }

        else {
            fetchData(seed, page, probability,fakerLang);
        }
    }, [seed, page, probability, currentSeed, fakerLang, lang, currentProbability]);
    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
            setPage(prevPage => prevPage + 1);
            setCount(10)
            console.log(`11lolo`)
        }
    };
    function handleCSVGenerate(){
        axios.post(`http://localhost:3000/convert-to-csv?data=${data}`)
            .then(response => {
                console.log('CSV file:', response.data);
                // Здесь можно обработать CSV файл
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            console.log(`lol111o`)
        };
    }, [page]);
    return (
        <div>
            <button onClick={handleCSVGenerate} >opauhdfi</button>
            <UserInfo key={data.id} data={data}/>
            {loading && <div className="text-center">Loading...</div>}
        </div>
    );
}
TableWithPagination.propTypes = {
    seed: PropTypes.number,
    probability: PropTypes.number,
    fakerLang: PropTypes.string,
    page: PropTypes.number
}
export default TableWithPagination;
