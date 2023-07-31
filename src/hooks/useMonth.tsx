import { useQuery } from "react-query";
import { useSelector } from "react-redux";

import { month } from "../interfaces/month";
import { dreambookApi } from "../apis/dreambookApi";


const getMonth = async(month:string):Promise<month | null> =>{
    const params = new URLSearchParams();

    if(month === null){ return null }
    params.append('month', month.toString())

    const {data} = await dreambookApi.get<month>(`/get-dreams`, {params})
    return data;
}

export const useMonth = () =>{
    const month = useSelector((state: any)=>state.date.month);
    const MonthQuery = useQuery(['dream'],()=> getMonth(month))

    return {MonthQuery}
}