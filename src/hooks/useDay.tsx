import { useQuery } from "react-query";
import { dreambookApi } from "../apis/dreambookApi";
import { Day } from "../interfaces/days";

const getDay = async(year:string, month: string, day: string):Promise<Day> =>{
    const params = new URLSearchParams();
    params.append('year',   year.toString())
    params.append('month',  year.toString())
    params.append('day',    year.toString())

    //const {data} = await dreambookApi.get<Day>(`/dream/${year}/${month}/${day}`)
    const {data} = await dreambookApi.get<Day>(`/dream/`, {params})
    return data;
}

interface Props{
    year: string,
    month:string,
    day:string
}

export const useDay = ({year, month, day}:Props) =>{
    const dayQuery = useQuery(
        ['dream'],
        () =>getDay(year,month,day),
        {

        }
    )
}