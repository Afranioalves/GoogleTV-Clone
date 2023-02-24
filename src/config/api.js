const api_key = "db8da3eefd32cb61215de5ae880dbb14";
export const BASE_API = (type, page)=>{
    const url = `https://api.themoviedb.org/3/movie/${type}?api_key=${api_key}&language=pt-BR&page=${page}`;
    return url;
}
export const BASE_IMG = "https://image.tmdb.org/t/p/w500/"
export const TRENDING = `https://api.themoviedb.org/3/trending/all/week?api_key=${api_key}&language=pt-BR&page=2`

export const BASE_API_SIMILAR = (id)=>{
    const url = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${api_key}&language=pt-BR&page=1`
    return url;
}