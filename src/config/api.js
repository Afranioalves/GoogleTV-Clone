export const BASE_API = (type, page)=>{
    const api_key = "db8da3eefd32cb61215de5ae880dbb14";
    const url = `https://api.themoviedb.org/3/movie/${type}?api_key=${api_key}&language=pt-BR&page=${page}`;
    return url;
}
export const BASE_IMG = "https://image.tmdb.org/t/p/w500/"