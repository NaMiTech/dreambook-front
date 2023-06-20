import { useQuery } from "react-query";
import { dreambookApi } from "../apis/dreambookApi";
import { Tag } from "../interfaces/tag";

export const getTags = async()=>{
    const {data} = await dreambookApi.get<Tag[]>('/tags');
    return data
}

export const useTag = ()=>{
    const tagQuery = useQuery([],()=> getTags())

    return {tagQuery}
}