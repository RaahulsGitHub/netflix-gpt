import { BG_URL } from "../utils/constants"
import GptSearchBar from "./GptSearchBar"

const GPTSearchPage = ()=>{
    return(
        <div>
            <div className="absolute -z-10">
        <img className="" src={BG_URL} alt="background" />
      </div>
      <GptSearchBar/>

        </div>
    )
}

export default GPTSearchPage