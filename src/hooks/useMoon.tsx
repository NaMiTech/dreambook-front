import { useQuery } from "react-query";
import { dreambookApi } from "../apis/dreambookApi";
import { Moon } from "../interfaces/moons";

export const getMoon = async()=>{
    const {data} = await dreambookApi.get<Moon>('/moon');
    return data
}

export const useMoon = ()=>{
    const moonQuery = useQuery(['moon'],()=> getMoon())

    return {moonQuery}
}