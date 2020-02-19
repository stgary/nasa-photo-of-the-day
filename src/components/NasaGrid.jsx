import React, {useState, useEffect} from "react";
import axios from "axios";
import NasaCard from "./NasaCard";

export default function NasaGrid() {
    const [obj, setObj] = useState({});
    // console.log(obj);

    useEffect(() => {
        axios
        .get("https://api.nasa.gov/planetary/apod?api_key=pasrjU23jEfujKSFWRQPwZIlYzu54RbmfhD85VVx")
        .then(response => {
            setObj(response.data);
            // console.log(response);
        })
        .catch(error => {
            // console.log(error);
        });
    }, []);

    return (
        <div className = "apod">
            <NasaCard 
                date = {obj.date}
                explanation = {obj.explanation}
                image = {obj.hdurl}
                title = {obj.title}
            />
        </div>
    );
}

// pasrjU23jEfujKSFWRQPwZIlYzu54RbmfhD85VVx