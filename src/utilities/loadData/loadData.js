import { useEffect, useState } from "react";
// here will load data ( service ) to any where . you can use this any where 
const LoadData = () =>{
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('./data.json')
        .then(response => response.json())
        .then(data => setServices(data))
    },[]);
    return [services,setServices];
};
export default LoadData;