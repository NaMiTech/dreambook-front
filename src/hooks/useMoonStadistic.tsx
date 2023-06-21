import { useQuery } from "react-query";
import { dreambookApi } from "../apis/dreambookApi";
import { GlobalStadistic } from "../interfaces/globalStadistic";
import { useSelector } from "react-redux";

const getMoonStadistic = async(year:string):Promise<GlobalStadistic> =>{
    const {data} = await dreambookApi.get<GlobalStadistic>(`/moon-influence/${year}/`)
    return data;
}

export const useMoonStadistic = () =>{    
    const year = useSelector((state: any)=>state.date.year);
    const MoonStadisticQuery = useQuery(['moon-influence'],()=> getMoonStadistic(year))
    return {MoonStadisticQuery}
}
