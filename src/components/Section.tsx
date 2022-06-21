import { Movie } from "../types/Movie"

type Props = {
    data: Movie[]
}

export const Section = ({data}: Props) => {
    return (
        <section className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 max-w-7xl gap-y-10 gap-x-5 px-5">
        {data.map((item,index)=>(
          <div>
            <img src={item.avatar} alt="" className="w-full rounded-md"/>
            <p className="text-center pt-1 font-semibold">{item.titulo}</p>
          </div>
        ))}
      </section>
    )
}