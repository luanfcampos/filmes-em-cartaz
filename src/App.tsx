import { useEffect, useState } from "react";
import { Movie } from "./types/Movie";

const App = () => {

  const [movies, setMovies] = useState<Movie[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(()=> {
    handleLoad()
  },[])

  const handleLoad = async () => {
    setLoading(true)
    let response = await fetch('https://api.b7web.com.br/cinema/')
    let json = await response.json()
    setMovies(json.reverse())
    setLoading(false)
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
      {loading &&
        <div className="flex flex-col items-center justify-center gap-2 fixed z-10 w-screen h-screen bg-indigo-900">
          <p>Carregando...</p>
          <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            width="80px" height="80px" viewBox="0 0 50 50" xmlSpace="preserve">
          <path fill="#a5b4fc" d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z">
            <animateTransform attributeType="xml"
              attributeName="transform"
              type="rotate"
              from="0 25 25"
              to="360 25 25"
              dur="0.6s"
              repeatCount="indefinite"/>
            </path>
          </svg>
        </div>
      }
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
