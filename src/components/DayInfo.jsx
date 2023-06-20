import React, { useEffect, useState } from 'react';
import { CloudTags } from '../CloudTags';
import { useMoon } from '../hooks/useMoon';

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

    if(moonQuery.isLoading){return (<div>A moment please...</div>);}

    return(
        <>
        <div className='component'>

        EL DÍA {currentDay}: 
        
        <>
            <div className="container text-center">
            <div className="row">
                <div className="col">
                    <h3>Total</h3>

                    <span className="badge rounded-pill">1000</span>
                    <div className="row">
                        <div className="col">
                        <span>Negativo </span>
                        <span className="badge rounded-pill text-bg-danger">7%</span>
                        </div>
                        <div className="col">
                        <span>Positivo </span>
                        <span className="badge rounded-pill text-bg-success">93%</span>
                        </div>
 
                    </div>
                    
                </div>
                <div className="col">
                    <h3>Top de temas</h3>
                    <div className="card">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">An item</li>
                            <li className="list-group-item">A second item</li>
                            <li className="list-group-item">A third item</li>
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
                    <span>Sentimiento Onirico : <span className="badge rounded-pill text-bg-danger">Positivo</span></span>
                </div>
                <div className="col">
                    <h3>Temas más comentados ese día</h3>
                    <CloudTags/>
                    <span>Sentimiento en la vigilia : <span className="badge rounded-pill text-bg-danger">Positivo</span></span>
                </div>
            </div>
            </div>
        </>
    </div>
        </>

        
    )
}