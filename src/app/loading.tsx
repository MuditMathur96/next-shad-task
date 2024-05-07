import { Loader } from "lucide-react";

const Loading = ()=>{

    return (<div
    className="h-full w-full
    flex items-center justify-center  p-12"
    >
        <Loader
        className="h-[10%] w-[10%] md:h-[10%] md:w-[10%] 
        transition  animate-spin"
        />
    </div>)
}

export default Loading;