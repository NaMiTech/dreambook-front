import { useQuery } from "react-query";
import { useSelector } from "react-redux";

import { dreambookApi } from "../apis/dreambookApi";
import { GlobalStadistic } from "../interfaces/globalStadistic";

const getSeansons = async(year:string):Promise<GlobalStadistic> =>{
    const {data} = await dreambookApi.get<GlobalStadistic>(`/seasons/${year}/`)
    return data;
}

export const useSeasons = () =>{
    const year = useSelector((state: any)=>state.date.year);
    const SeasonQuery = useQuery(['seasons'],()=> getSeansons(year))

    return {SeasonQuery}
}
