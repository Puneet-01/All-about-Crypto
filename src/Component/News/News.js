import React,{useState,useEffect} from 'react'
import {Media } from 'reactstrap'
import axios from "axios"

const News = () =>{

  const [news,setNews] = useState()
  
  const options = {
    method: 'GET',
    url: 'https://newsapi.org/v2/everything?q=bitcoin&apiKey=daf82df9174049a5b64847839a91a169',
    
  };
  useEffect(()=>{
    fetchData();
  },[])
  const fetchData = () =>{
    return(

    axios.request(options).then(function (response) {
    console.log(response)
    setNews(response.data.articles)
        }).catch(function (error) {
          console.error(error)
        })
    )
  }
  
    //console.log(news)
    return(
        <div>

            {news?.map(article=>
                <Media>
                <Media left href="article.url">
                  <Media object data-src={article.urlToImage} alt="Generic placeholder image" />
                </Media>
                <Media body>
                  <Media heading>
                    {article.title}
                  </Media>
                  {article.description}
                </Media>
              </Media>
              
                )
                }
                
        </div>
    )
}

export default News;