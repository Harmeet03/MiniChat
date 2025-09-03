import logo from '../assets/logo.png'
import { useNavigate } from "react-router-dom";
import { setPermission } from '../../utils/localStorageWithExpiry';

const Landing = () => {
    const to = useNavigate();

    const duration = 60 * 60 * 1000 // 1 hour

    const handleSubmit = (e) => {
        e.preventDefault()
        setPermission('session', 'active', duration)
        to('/chat')
    }

    return(
        <div className='bg-gradient-to-br from-cyan-500 to-gray-500  h-screen text-white overflow-y-auto'>
            <div className='flex flex-col lg:flex-row lg:m-auto lg:w-250 lg:justify-between justify-center gap-16 items-center h-screen'>
                <div className='items-center text-center flex flex-col px-4 lg:w-1/2'>
                    <img src={logo} className='w-50'/>
                    <p className='text-3xl lg:text-5xl'> Your friendly chatbot powered by Machine Learing </p>
                </div>

                <form className='px-4' onSubmit={handleSubmit}>
                    <div className='bg-white text-black p-8 rounded-4xl flex flex-col gap-4'>
                        <p className='text-2xl text-center font-bold'> What can MiniChat do? </p>
                        <p className='text-xl'> • Ask questions </p>
                        <p className='text-xl'> • Summarize text </p>
                        <p className='text-xl'> • Get instant replies </p>
                        <button className='text-xl bg-black text-white p-4 rounded-2xl cursor-pointer' type='submit'> Start Chatting </button>
                    </div>
                    <div className='text-center py-4'>
                        <p> Powered by FastAPI & React. No copyright intended. </p>
                        <p> <input type='checkbox' required/> By starting chat, you are agreeing with <span className='underline cursor-pointer' onClick={() => {to('/terms')}}>Terms</span> & <span className='underline cursor-pointer' onClick={() => {to('/privacy')}}>Privacy</span>. </p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Landing