import React, { useEffect, useState } from 'react';
import { CloudTags } from '../CloudTags';
import { useMoon } from '../hooks/useMoon';
import { useDay } from '../hooks/useDay';
import Swal from 'sweetalert2'

import { ErrorComponent } from './ErrorComponent';
import { NoDataComponent } from './NoDataComponent';

export const DayInfo = () => {
    
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

    const {DayQuery} = useDay()

    useEffect(()=>{
        //console.log(DayQuery)
    }, [DayQuery])

    if(DayQuery.isLoading){return (<div class="custom-loader"></div>);}    
    if(DayQuery.isError){return (<ErrorComponent/>)} 
    if(!DayQuery.data){return(<NoDataComponent/>)}

    const payload = DayQuery.data;

    const topicInfo = (topic) =>{
        Swal.fire({
            title: `${topic}`,
            text:  ``,
            icon: 'info',
            confirmButtonText: 'ok'
          })

    }

    return(
        <>
        <div className="container text-center">
            <h3>Fase Lunar</h3>
            <img 
                src={`${ moonImage }`} 
                width={'200px'} 
                alt='moon'/>
            <p>{moonPhase}</p>
            <div className="row">

                 <div className="col">                     
                     <div className="card">
                        <div className="card-header">
                            <p>Top de temas</p>     
                            <div className="row">
                                <div className="col">Positivos: {payload.negative}%</div>  
                                <div className="col"></div>  
                                <div className="col">Negativos: {payload.positive}%</div>
                            </div>
                                         
                        </div>
                         <ul className="list-group list-group-flush">
                             {payload.top.map((topic, i) => <li className="list-group-item" key={i} onClick={()=>topicInfo(topic)}>{topic}</li>)}
                         </ul>
                         <div className="card-footer">
                            Total de temas analizado: {payload.total}
                        </div>
                     </div>
                 </div>

            </div>

            <div className="row" style={{marginTop:'2rem'}}>
                <div className="col">
                    <span className="badge rounded-pill text-bg-success feel-badge"><span className='badge-title'>sentimiento predomintante</span> <br/><span className='badge-subtitle'>{payload.oniric_feel}</span></span>
                    <h3>Temas más soñados</h3>
                    <br/>
                    {/* <span className='feel-label'>Sentimiento predominante:  <span className="badge rounded-pill text-bg-success">{payload.oniric_feel}</span></span> */}
                    <CloudTags/>
                    
                </div>
                <div className="col">
                    <span className="badge rounded-pill text-bg-danger feel-badge"><span className='badge-title'>sentimiento predomintante</span> <br/><span className='badge-subtitle'>{payload.day_feel}</span></span>
                    <h3>Temas más comentados</h3>
                    <br/>
                    <CloudTags/>
                    
                </div>
            </div>
        </div>
        </>        
    )
}