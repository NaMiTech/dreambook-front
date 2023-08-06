import { useQuery } from "react-query";
import { dreambookApi } from "../apis/dreambookApi";
import { Tag } from "../interfaces/tag";
import { useSelector } from "react-redux";

export const getTags = async(language:string)=>{
    const params = new URLSearchParams();
    params.append('lang',   language.toString())
    
    const {data} = await dreambookApi.get<Tag[]>('/tags', {params});
    return data
}

export const useTag = ()=>{
    const language = useSelector((state: any)=>state.language.selectedLanguage);
    const tagQuery = useQuery([],()=> getTags(language))

    return {tagQuery}
}