import { Season } from "./season"

export interface SeasonInfluence{
    "year": number,
    "winter": Season,
    "summer": Season,
    "sprint": Season,
    "fall": Season,
}