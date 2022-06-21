import { useEffect, useState } from "react";
import { Movie } from "./types/Movie";

const App = () => {

  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(()=> {
    handleLoad()
  },[])

  const handleLoad = async () => {
    let response = await fetch('https://api.b7web.com.br/cinema/')
    let json = await response.json()

    setMovies(json.reverse())
  }

  // const handleLoad = () => {
  //   fetch('https://api.b7web.com.br/cinema/')
  //     .then((response)=>{
  //       return response.json()
  //     })
  //     .then((json)=>{
  //       setMovies(json.reverse())
  //     })
  // }

  return (
    <div className="flex flex-col items-center justify-start gap-8 pb-10 bg-indigo-800 min-h-screen">
      <header id="header" className="flex flex-col items-center justify-center py-10 bg-indigo-900 w-full">
        <h1 className=" font-display text-6xl text-white text-center">Filmes em Cartaz</h1>
        <h2 className="text-xl text-white">Total de Filmes: {movies.length}</h2>
      </header>

      <section className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 max-w-7xl gap-y-10 gap-x-5 px-5">
        {movies.map((item,index)=>(
          <div>
            <img src={item.avatar} alt="" className="w-full rounded-md"/>
            <p className="text-white text-center pt-1">{item.titulo}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;
