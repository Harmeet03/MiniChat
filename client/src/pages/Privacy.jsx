import { useNavigate } from "react-router-dom";

const Privacy = () => {
    const to = useNavigate();
    const updateDate = 'July 14, 2025'

    return(
        <div className="bg-black h-screen px-8 text-white overflow-y-auto">
            <div className="lg:w-220 lg:m-auto">
                <p className="py-8 cursor-pointer w-10" onClick={() => {to('/')}}> Back </p>
                <div className="pb-8">
                    <p className="text-4xl sm:text-6xl lg:text-8xl mb-2"> Privacy Policy </p>
                    <p className="text-l sm:text-xl"> Last Updated: {updateDate} </p>
                </div>

                <div className="py-4">
                    <p className="text-xl sm:text-2xl lg:text-4xl"> Welcome to <b> MiniChat </b> </p>
                    <p className="text-l mb-8"> Your privacy is important to us. This Privacy Policy explains how MiniChat handles your information. </p>

                    <h1 className="text-2xl font-bold mb-2">1. What We Collect</h1>
                    <p> - MiniChat **does not collect personal information.** </p>
                    <p> - We use `localStorage` to store a simple `permission` flag to control access to certain pages. </p>
                    <p> - No analytics, cookies, or tracking scripts are used. </p><br/>
                    
                    <h1 className="text-2xl font-bold mb-2">2. Data Storage</h1>
                    <p> - All data remains in your browser. </p>
                    <p> - MiniChat does **not transmit** or store any data on external servers. </p><br/>
                    
                    <h1 className="text-2xl font-bold mb-2">3. Third-Party Services</h1>
                    <p> MiniChat does not use any third-party APIs that collect personal data. </p><br/>
                    
                    <h1 className="text-2xl font-bold mb-2">4. Your Control</h1>
                    <p> - You can clear your browser's local storage at any time. </p>
                    <p> - You are free to use or stop using MiniChat at your discretion. </p><br/>
                    
                    <h1 className="text-2xl font-bold mb-2">5. Security</h1>
                    <p> As no sensitive data is collected or stored, MiniChat poses no risk of data leakage or misuse. </p><br/>

                    <h1 className="text-2xl font-bold mb-2">6. Updates</h1>
                    <p> This Privacy Policy may be updated periodically. Continued use of the app means you accept the updated policy. </p><br/>
                </div>
                <p className="text-center pb-8 text-2xl"> If you have any questions about these Terms, <a href="mailto:harmeet.dhanjal2003@gmail.com" className="text-blue-500 underline cursor-pointer">reach me</a>.</p>
            </div>
        </div>
    )
}

export default Privacy