import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Section } from "./components/Section"
import { Footer } from "./components/Footer";
import { Movie } from "./types/Movie";
import { Loading } from "./components/Loading";
import { Error } from "./components/Error";

const App = () => {

  const [movies, setMovies] = useState<Movie[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(()=> {
    handleLoad()
  },[])


  const handleLoad = async () => {
    try {
      setLoading(true)
      let response = await fetch('https://api.b7web.com.br/cinema/')
      let json = await response.json()
      setMovies(json.reverse())
      setLoading(false)
    } catch(e){
      setTimeout(()=>setLoading(false),2000) //settimeout apenas para que o carregamento apareca por mais um tempo
      console.error(e)
    }
  }

  // const handleLoad = () => {
  //   fetch('https://api.b7web.com.br/cinema/')
  //     .then((response)=>{
  //       return response.json()
  //     })
  //     .then((json)=>{
  //       setMovies(json.reverse())
  //     })
  //     .catch((e)=>{
  //       setTimeout(()=>setLoading(false),2000)
  //       console.error(e)
  //     })
  // }

  return (

    <div className="flex flex-col items-center justify-between gap-8 bg-indigo-800 min-h-screen text-indigo-300">
      {loading &&
        <Loading/>
      }
      {!loading && movies.length === 0 &&
        <Error/>
      }
      <Header data={movies} />

      <Section data={movies}/>

      <Footer />

    </div>
  );
}

export default App;
