import React, { useEffect, useState } from 'react';
import { CloudTags } from '../CloudTags';
import { useMoon } from '../hooks/useMoon';
import { useDay } from '../hooks/useDay';

import { ErrorComponent } from './ErrorComponent';
import { NoDataComponent } from './NoDataComponent';

export const DayInfo = ({currentDay}) => {
    
    const {moonQuery} = useMoon();
    const [moonImage, setMoonImage] = useState('');
    const [moonPhase, setMoonPhase] = useState('');
    
    useEffect(()=>{
        if(moonQuery.data){
            //console.log(moonQuery.data.img)
            setMoonImage(moonQuery.data.img);
            setMoonPhase(moonQuery.data.phasename)
            
        }
    }, [moonQuery])

    //if(moonQuery.isLoading){return (<div>A moment please...</div>);}

    const DayQuery = useDay()

    useEffect(()=>{
        console.log(DayQuery)
    }, [DayQuery])

    if(DayQuery.isLoading){return (<div class="custom-loader"></div>);}    
    if(DayQuery.isError){return (<ErrorComponent/>)}      
    if(!DayQuery.data){return(<NoDataComponent/>)}

    const payload = {
        total: 1980,
        positive: 90,
        negative:5,
        neutral: 5,
        top: ["Una cosa", "Dos cosas", "Tres cosas"],
        moon: "",
        oniric_feel: "Positivo",
        day_feel: "Negativo"
    }


    return(
        <>
        <div className='component'>

        EL DÍA {currentDay}: 
        
        <>
            <div className="container text-center">
            <div className="row">
                <div className="col">
                    <h3>Total</h3>

                    <span className="badge rounded-pill">{payload.total}</span>
                    <div className="row">
                        <div className="col">
                        <span>Negativo </span>
                        <span className="badge rounded-pill text-bg-danger">{payload.negative}%</span>
                        </div>
                        <div className="col">
                        <span>Positivo </span>
                        <span className="badge rounded-pill text-bg-success">{payload.positive}%</span>
                        </div>
 
                    </div>
                    
                </div>
                <div className="col">
                    <h3>Top de temas</h3>
                    <div className="card">
                        <ul className="list-group list-group-flush">
                            {payload.top.map((topic, i) => <li className="list-group-item" key={i}>{topic}</li>)}
                        </ul>
                    </div>
                </div>
                <div className="col">
                    <h3>Fase Lunar</h3>
                    <img 
                        src={`${ moonImage }`} 
                        width={'200px'} 
                        alt='moon'/>
                    <p>{moonPhase}</p>
                </div>
            </div>
            <div className="row" style={{marginTop:'2rem'}}>
                <div className="col">
                    <h3>Temas más soñados</h3>
                    <CloudTags/>
                    <span>Sentimiento Onirico : <span className="badge rounded-pill text-bg-danger">{payload.oniric_feel}</span></span>
                </div>
                <div className="col">
                    <h3>Temas más comentados ese día</h3>
                    <CloudTags/>
                    <span>Sentimiento en la vigilia : <span className="badge rounded-pill text-bg-danger">{payload.day_feel}</span></span>
                </div>
            </div>
            </div>
        </>
    </div>
        </>

        
    )
}