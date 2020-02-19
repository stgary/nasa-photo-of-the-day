import React, {useState, useEffect} from "react";
import axios from "axios";
import NasaCard from "./NasaCard";

export default function NasaGrid() {
    const [data, setData] = useState([]);
    console.log(data);

    useEffect(() => {
        axios
        .get("")
        .then(response => {
            setData(response);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);
}