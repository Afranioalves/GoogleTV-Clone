import { BASE_IMG } from "../config/api"
import Movie from "../components/movie"

export const MovieRender = (data, navigate) =>{
    return data.map((film)=>{
        return(
          <Movie
            key={film.id} 
            poster={film.backdrop_path}
            price={film.vote_count.toLocaleString("de-DE",{ maximumSignificantDigits: 3 })+' kz'}
            vote={film.vote_average}
            count={film.vote_count}
            data={film}
            screen="Home"
            navigate={navigate}
          />
        )
      })
  }

  export const MovieRenderLocal = (data, navigate) =>{
    return data.map((film)=>{
        return(
          <Movie
            key={film.id} 
            poster={film.cover}
            price={film.price}
            vote={film.vote}
            count={film.count}
            data={film}
            screen="Home"
            navigate={navigate}
          />
        )
      })
  }

