import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { getPermission } from "../../utils/localStorageWithExpiry";

const PublicRoute = ({children}) => {
    const to = useNavigate();
    const [directAccess, setDirectAccess] = useState(false);
    const permission = getPermission('session')
    
    useEffect(() => {
        if(permission !== 'active'){
            setDirectAccess(true)
        }
        else{
            setDirectAccess(false)
        }
    }, [])


    if(directAccess){
        return(
            <div className="justify-center bg-black h-screen text-white flex flex-col gap-8 py-50 px-5">
                <p className="text-4xl sm:text-6xl"> Directly accessing this page is not allowed. </p> 
                <p className="text-2xl sm:text-4xl"> Kindly <span className="underline text-blue-600 cursor-pointer" onClick={() => {to('/')}}>visit here</span> first. </p>
            </div>
        )
    }

    return children
}

export default PublicRoute