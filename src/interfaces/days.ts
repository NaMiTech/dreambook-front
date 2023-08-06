import { Moon } from "./moons";
import { Tag } from "./tag";

export interface Day{
    positive: number,
    negative:string,
    neutral: string,
    top: string[],
    topics: Tag[],
    dreams: Tag[],
    moon: Moon,
    oniric_feel: number,
    day_feel: number
}