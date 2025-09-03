import { useNavigate } from 'react-router-dom'
import notfound from '../assets/notfound.png'

const NotFound = () => {
    const to = useNavigate();

    return(
        <div className='bg-black h-screen flex flex-col justify-center items-center gap-4'>
            <img src={notfound} className='w-50 border animate-bounce'/>
            <p className='text-white text-center text-4xl w-20 cursor-pointer underline' onClick={() => {to('/')}}> Back </p>
        </div>
    )
}

export default NotFound