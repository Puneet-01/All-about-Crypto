import React,{useState,useEffect} from 'react'
import {Table } from 'reactstrap'
import axios from "axios"

const CoinTable = () =>{

  const [coins,setCoins] = useState()
  
  const options = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/coins',
    params: {
      referenceCurrencyUuid: 'yhjMzLPhuIDl',
      timePeriod: '24h',
      'tiers[0]': '1',
      orderBy: 'marketCap',
      orderDirection: 'desc',
      limit: '50',
      offset: '0'
    },
    headers: {
      'X-RapidAPI-Key': 'e51eade1d8mshcd9ab9a6ea351c0p1e0263jsnd0b4fba768a4',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
  };
  useEffect(()=>{
    fetchData();
  },[])
  const fetchData = () =>{
    return(

    axios.request(options).then(function (response) {
    
    setCoins(response.data.data.coins)
        }).catch(function (error) {
          console.error(error)
        })
    )
  }

    console.log(coins)
    return(
        <div>

            {coins?.map(coin=>
                <Table className='Layout'>
                <thead>
                  <tr>
                    <th>S.Id</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Change</th>
                  </tr>
                </thead>
                <tbody>
                  <tr key={coin.rank}>
                     
                    <td >{coin.rank}</td>
                    <td >{coin.name}</td>
                    <td >{coin.price}</td>
                    <td >{coin.change}</td>
                  </tr>
                  
                </tbody>
              </Table>
                )
                }
        </div>
    )
}

export default CoinTable;