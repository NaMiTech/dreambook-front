import { useQuery } from "react-query";
import { dreambookApi } from "../apis/dreambookApi";
import { Day } from "../interfaces/days";
import { useSelector } from "react-redux";

const getDay = async(year:string, month: string, day: string):Promise<Day | null> =>{
    if(day === null){ return null }
    const params = new URLSearchParams();
    params.append('year',   year.toString())
    params.append('month',  month.toString())
    params.append('day',    day.toString())
    const {data} = await dreambookApi.get<Day>(`/get-dreams`, {params})
    return data;
}

export const useDay = () =>{
    const day = useSelector((state: any)=>state.date.day);
    const month = useSelector((state: any)=>state.date.month);
    const year = useSelector((state: any)=>state.date.year);

    const DayQuery = useQuery(['dayDream'],()=> getDay(year,month,day))

    return {DayQuery}
}