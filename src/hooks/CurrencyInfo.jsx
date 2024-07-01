import React from "react";
import { useEffect,useState } from "react";


function useCurrencyData(currency){

    let [data,setdata] = useState({})

    useEffect(()=>{
            fetch( ` https://v6.exchangerate-api.com/v6/d58ff582fa33fdc6dedddfa0/latest/${currency}`)
            .then((response)=>{
                return response.json()
            })
            .then((response)=>{
                setdata(response.conversion_rates)
            })
    },[currency])

    return data


}

export default useCurrencyData