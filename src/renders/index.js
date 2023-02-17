import { BASE_IMG } from "../config/api"
import Movie from "../components/movie"

export const MovieRender = (data) =>{
    return data.map((film)=>{
        return(
          <Movie
            key={film.id} 
            poster={`${BASE_IMG}${film.backdrop_path}`}
            price={film.vote_count.toLocaleString("de-DE",{ maximumSignificantDigits: 3 })+' kz'}
            vote={film.vote_average}
            count={film.vote_count}
          />
        )
      })
  }

  {
/*
    <Movie poster={Spider} price='1 800,00 kz'/>
                <Movie poster={Bumbeblee}/>
                <Movie poster={Adam}/>*/
  }