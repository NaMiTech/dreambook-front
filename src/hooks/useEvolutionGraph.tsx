import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { dreambookApi } from "../apis/dreambookApi";
import { EvolutionData } from "../interfaces/evolutionData";

const getEvolution = async(year:string):Promise<EvolutionData> =>{
    const {data} = await dreambookApi.get<EvolutionData>(`/dream-char/${year}/`)
    return data;
}

export const useEvolutionGraph = () =>{
    const year = useSelector((state: any)=>state.date.year);
    const EvolutionQuery = useQuery(['evolution'],()=> getEvolution(year))
    return {EvolutionQuery}
}