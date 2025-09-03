import logo from '../assets/logo.png'

const Chat = () => {
    return(
        <div className='flex flex-col bg-black text-white h-screen'>
            <div className='flex flex-row items-center sm:justify-center sm:gap-40 justify-around'>
                <img src={logo} className="w-25"/>
                <p className='text-4xl'> Ask anything! </p>
                <span/>
            </div>

            <div className='flex-1 px-4 sm:w-160 w-full m-auto pb-30 mb-40 overflow-y-auto'>
                <div className='text-right py-4'>
                    <p className='bg-gray-800 inline-block p-4 rounded-xl'> Hello how are you </p>
                </div>
                <div className='py-4'>
                    <p className='bg-gray-800 inline-block p-4 rounded-xl'> I am fine </p>
                </div>
            </div>

            <div>
                <form className='sm:m-auto sm:w-160 fixed bottom-15 left-1/2 tranform -translate-x-1/2 flex w-full sm:left-1/2 py-4 sm:rounded-xl bg-gray-800'>
                    <input className='px-4 w-full py-4 focus:outline-none' type="text" placeholder='Start a conversation'/>
                    <button className='px-4 cursor-pointer'> Send </button>
                </form>
                <p className='py-2 text-center fixed bottom-0 sm:static bg-black'> This website is for demonstration of my skills purpose only. No copyright intended </p>
            </div>
        </div>
    )
}

export default Chat