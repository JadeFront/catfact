import React from 'react'
import './style.css'
import { useQuery } from '@tanstack/react-query'
import Axios from 'axios'

const Catfact = () => {
    const { data , isLoading, refetch } = useQuery({
        queryKey: ['cat'],
        queryFn: () => {
            return Axios.get('https://catfact.ninja/fact').then((res) => res.data)
        },
    });

    if (isLoading) {
        return <h1>Loading...</h1>
    }
  return (
    <div className='container'>
         <div className='quote'>
            <p>{data?.fact}</p>
            <div>
                <button onClick={refetch}>new cat fact</button>
            </div>
        </div>
    </div>
  )
}

export default Catfact