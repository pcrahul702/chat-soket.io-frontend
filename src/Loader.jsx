import {Circles} from "react-loader-spinner"
export const Loader=()=>{
    return (
        <div>
            <Circles
            height={80}
            width={80}
            color="#ob5ed7"
            ariaLabel="Circles-Loading"
            wrapperClass=""
            wrapperStyle={{
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center',
                height:'100vh'
            }
            }
            />
        </div>
    )
}