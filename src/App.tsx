import { useEffect, useState } from 'react'

/*definir o formato do repositório */ 

type Respository = {
  full_name:string;
  description:string;
}

function App() {
  const [repositories, setRepositories] = useState<Respository []>([])

  useEffect(()=>{
    fetch('https://api.github.com/users/orlandoj77/repos')
    .then(Response => Response.json())
    .then(data=>{
      setRepositories(data);
    })
  })
  return (
   <>
   Hello world
   </>
   
  )
}

export default App
