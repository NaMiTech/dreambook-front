import React from 'react';
import Swal from 'sweetalert2'
import { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { TagCloud } from 'react-tagcloud'

import { useTag } from './hooks/useTag';
import { ErrorComponent } from './components/ErrorComponent';
import { NoDataComponent } from './components/NoDataComponent';

export const CloudTags = () => {
const currentLanguage = useSelector((state)=>state.language.selectedLanguage);
const {tagQuery} = useTag();

useEffect(()=>{
    
  console.log("Recuperando las tags en : " + currentLanguage)

},[currentLanguage])

if(tagQuery.isLoading){return (<div class="custom-loader"></div>);}    
if(tagQuery.isError){return (<ErrorComponent/>)}      
if(!tagQuery.data){return(<NoDataComponent/>)}

return(
    <>    
    <div className="cloud-container">
    
        <TagCloud
            minSize={12}
            maxSize={35}
            tags={tagQuery.data}
            className="dream-cloud"            
            onClick={tag => Swal.fire({
              title: `${tag.value}`,
              text:  `apareció ${tag.count} veces`,
              icon: 'info',
              confirmButtonText: 'ok'
            })}
            
        />
      
  </div>
  </>
)
}