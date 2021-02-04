import {useState} from "react";
import axios from "axios";
import uuid from "uuid";

const useToggleState = (initialState=true) => {
    const [state, setState] = useState(initialState);
    const toggleState = () => {
        setState(state => !state);
    }
    return [state, toggleState]
}

const useAxios = (url) => {
    const [data, setData] = useState([]);

    const addData = async (restOfUrl) => {
        // If no data passes into restOfUrl, then it returns an object.
        // So change it back to string
        if(restOfUrl instanceof Object){
            restOfUrl = '';
        }
        const completeUrl = url + restOfUrl;
        const response = await axios.get(completeUrl)
        setData(data => [...data, {...response.data, id: uuid()}]);
    }

    return [data, addData]
}

export {useToggleState, useAxios};