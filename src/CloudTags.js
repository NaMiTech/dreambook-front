import { useState, useEffect } from "react";
import { TagCloud } from 'react-tagcloud'

const baseUrl = process.env.REACT_APP_API_URL;

export const CloudTags = () => {

const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);


useEffect(() => {
  const getData = async () => {
    try {
      const response = await fetch(
        `${ baseUrl }/tags`
      );
      if (!response.ok) {        
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        );
      }
      let actualData = await response.json();
      console.log(actualData);
      setData(actualData);
      setError(null);
    } catch(err) {
      setError(err.message);      
      setData(null);
    } finally {
      setLoading(false);
    }  
  }
  getData()
}, [])


if(loading){return (<div>A moment please...</div>);}

if(!loading && error != null){
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
            tags={data}
            className="dream-cloud"
            onClick={tag => alert(`'${tag.value}' was selected!`)}
        />
      
  </div>
  </>
)
}