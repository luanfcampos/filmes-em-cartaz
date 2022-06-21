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
    <div className="flex flex-col items-center justify-between gap-8 bg-indigo-800 min-h-screen text-indigo-300">
      <header id="header" className="flex flex-col items-center justify-center py-10 bg-indigo-900 w-full">
        <h1 className=" font-display text-6xl text-center">Filmes em Cartaz</h1>
        <h2 className="text-xl font-bold">Total de Filmes: {movies.length}</h2>
      </header>

      <section className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 max-w-7xl gap-y-10 gap-x-5 px-5">
        {movies.map((item,index)=>(
          <div>
            <img src={item.avatar} alt="" className="w-full rounded-md"/>
            <p className="text-center pt-1 font-semibold">{item.titulo}</p>
          </div>
        ))}
      </section>

      <footer className="bg-indigo-900 py-4 px-8 mt-10 w-full flex justify-center items-center">
        <p className="max-w-sm text-center">Feito por <a className="font-bold text-indigo-100" href="https://github.com/luanfcampos">Luan Campos</a> durante o curso de desenvolvimento web fullstack da <a className="font-bold text-indigo-100" href="https://b7web.com.br/fullstack/">B7Web</a></p>
      </footer>
    </div>
  );
}

export default App;
