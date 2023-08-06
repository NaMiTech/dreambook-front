import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { dreambookApi } from "../apis/dreambookApi";
import { SeasonInfluence } from "../interfaces/seasonInfluence";

const getSeansons = async(year:string):Promise<SeasonInfluence> =>{
    const {data} = await dreambookApi.get<SeasonInfluence>(`/season-influence/${year}/`)
    return data;
}

export const useSeasons = () =>{
    const year = useSelector((state: any)=>state.date.year);
    const SeasonQuery = useQuery(['seasons'],()=> getSeansons(year))
    return {SeasonQuery}
}
