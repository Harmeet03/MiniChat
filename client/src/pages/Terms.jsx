import { useNavigate } from "react-router-dom";

const Terms = () => {
    const to = useNavigate();
    const updateDate = 'July 14, 2025'

    return(
        <div className="bg-black h-screen px-8 text-white overflow-y-auto">
            <div className="lg:w-250 lg:m-auto">
                <p className="py-8 cursor-pointer w-10" onClick={() => {to('/')}}> Back </p>
                <div className="pb-8">
                    <p className="text-4xl sm:text-6xl lg:text-8xl"> Terms and Conditions </p>
                    <p className="text-l sm:text-xl"> Last Updated: {updateDate} </p>
                </div>

                <div className="py-4">
                    <p className="text-xl sm:text-2xl lg:text-4xl"> Welcome to <b> MiniChat </b> </p>
                    <p className="text-l mb-8"> By accessing and using this application, you agree to be bound by the following terms and conditions. Please read them carefully before using the service. </p>

                    <h1 className="text-2xl font-bold mb-2">1. Use of Service</h1>
                    <p className="mb-8"> MiniChat is provided for informational and educational purposes. You agree to use the chatbot responsibly and not for any illegal or harmful activities. </p>
                    
                    <h1 className="text-2xl font-bold mb-2">2. Data Collection</h1>
                    <p className="mb-8"> MiniChat may store non-sensitive user preferences (such as access flags) in your local browser storage. No personally identifiable information is collected. </p>
                    
                    <h1 className="text-2xl font-bold mb-2">3. Intellectual Property</h1>
                    <p className="mb-8"> All content, including UI design, chatbot logic, and branding (e.g., "MiniChat" name and logo), is the intellectual property of the project owner and may not be reused without permission. </p>
                    
                    <h1 className="text-2xl font-bold mb-2">4. No Warranty</h1>
                    <p className="mb-8"> This service is provided “as is,” without warranty of any kind. The chatbot may not always provide accurate or complete information. </p>
                    
                    <h1 className="text-2xl font-bold mb-2">5. Limitation of Liability</h1>
                    <p className="mb-8"> The developer of MiniChat is not responsible for any damages or losses resulting from the use or inability to use the chatbot. </p>

                    <h1 className="text-2xl font-bold mb-2">6. Changes to Terms</h1>
                    <p className="mb-8"> These terms may be updated at any time. Continued use of MiniChat constitutes your acceptance of the revised terms. </p>
                </div>
                <p className="text-center pb-8 text-2xl"> If you have any questions about these Terms, <a href="mailto:harmeet.dhanjal2003@gmail.com" className="text-blue-500 underline cursor-pointer">reach me</a>.</p>
            </div>
        </div>
    )
}

export default Terms