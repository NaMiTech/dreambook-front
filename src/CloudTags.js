import React from 'react';
//import { useState, useEffect } from "react";
import { TagCloud } from 'react-tagcloud'
import { useTag } from './hooks/useTag';
import Swal from 'sweetalert2'
import { ErrorComponent } from './components/ErrorComponent';
import { NoDataComponent } from './components/NoDataComponent';

//const baseUrl = process.env.REACT_APP_API_URL;

export const ShowTagDetail = (e) => {
  return(
      <>
      <h2>Con esto se sueña: </h2>
      </>
  )
}

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



// if(tagQuery.isLoading){return (<div>A moment please...</div>);}

// if(!tagQuery.data){
//   return(
//     <>
//       <div className="errorCloud">
//         <h3 className="btn-shine">Error</h3>
//         <p>No se han podido cargar los tags</p>
//       </div>    
//     </>
//   )
  
// }

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