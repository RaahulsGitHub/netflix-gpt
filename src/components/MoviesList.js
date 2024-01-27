import MovieCard from "./MovieCard";

const MoviesList = ({moviesData, title})=>{

    return(
        <div className="p-4 bg-black -mt-14 py-8">
                <h1 className="text-2xl font-medium my-4 text-white">{title}</h1>
            <div className="flex overflow-x-scroll scroll  scrollbar-hide">
                <div className="flex mx-5">
                    {moviesData?.map((movie)=>
                    <MovieCard key={movie.id} poster_path={movie.poster_path}/>
                    )}
                </div>
            </div>
        </div>
    )
}

export default MoviesList;