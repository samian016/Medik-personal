import { useEffect, useState } from "react";
// this is used to load data (Doctor) . 
const LoadDoctors = () =>{
    const [doctors, setDoctors] = useState([]);
    useEffect(()=>{
        fetch('./doctors.json')
        .then(response => response.json())
        .then(data => setDoctors(data))
    },[]);
    return [doctors, setDoctors];
};
export default LoadDoctors;