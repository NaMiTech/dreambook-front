import React from 'react';
//import { useState, useEffect } from "react";
import { TagCloud } from 'react-tagcloud'
import { useTag } from './hooks/useTag';

//const baseUrl = process.env.REACT_APP_API_URL;

export const CloudTags = () => {

// const [data, setData] = useState(null);
// const [loading, setLoading] = useState(true);
// const [error, setError] = useState(null);

const {tagQuery} = useTag();

// useEffect(() => {
//   const getData = async () => {
//     try {
//       const response = await fetch(
//         `${ baseUrl }/tags`
//       );
//       if (!response.ok) {        
//         throw new Error(
//           `This is an HTTP error: The status is ${response.status}`
//         );
//       }
//       let actualData = await response.json();
//       console.log(actualData);
//       setData(actualData);
//       setError(null);
//     } catch(err) {
//       setError(err.message);      
//       setData(null);
//     } finally {
//       setLoading(false);
//     }  
//   }
//   getData()
// }, [])

// useEffect(()=>{
//   console.log(tagQuery)
//   setData(tagQuery.data)
// },[tagQuery])


//if(loading){return (<div>A moment please...</div>);}
if(tagQuery.isLoading){return (<div>A moment please...</div>);}

if(!tagQuery.data){
  return(
    <>
      <div className="errorCloud">
        <h3 className="btn-shine">Error</h3>
        <p>No se han podido cargar los tags</p>
      </div>    
    </>
  )
  
}
return(
    <>    
    <div className="cloud-container">
    
        <TagCloud
            minSize={12}
            maxSize={35}
            tags={tagQuery.data}
            className="dream-cloud"
            onClick={tag => alert(`'${tag.value}' ha aparecido en ${tag.value} sueños`)}
        />
      
  </div>
  </>
)
}