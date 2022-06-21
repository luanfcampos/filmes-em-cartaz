import { Movie } from "../types/Movie"

type Props = {
    data: Movie[]
}

export const Header = ({data}: Props) => {
    return (
        <header id="header" className="flex flex-col items-center justify-center py-10 bg-indigo-900 w-full">
            <h1 className=" font-display text-6xl text-center">Filmes em Cartaz</h1>
            <h2 className="text-xl font-bold">Total de Filmes: {data.length}</h2>
        </header>
    )
}