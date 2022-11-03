import { useState, useEffect } from 'react'
import Navegacion from '../../components/navbar/Navbar'
//import Layout from '../../components/layout'


const Github=()=>{
  const [repos, setRepos]=useState([])
  console.log(repos)
  useEffect(()=>{
    fetch('https://api.github.com/users/Lucfer666/repos',{ 
	method: 'GET',
      })
    .then(res => res.json())
      .then(res => {
	setRepos(res)	
      })
  },[])
  return(
    <div>
	<Navegacion/>
	<h1>Github projects</h1>
    {repos.map(x => (
      <div className='p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4' key={`${x.id}`}>
	<div className='text-xl font-medium text-black'>{x.name}</div>
	  <button href={`${x.html_url}`} className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-blue-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Ver proyecto</button>
      </div>
    ))}
    </div>
  )
}

export default Github
