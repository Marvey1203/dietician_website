const FormPopUp = ({handleFormPopUp}) => {
    return ( 
        <div className="fixed top-5 right-5 w-[250px] h-[80px] rounded-lg bg-black p-3">
            <div>
                
                <h6 className="text-white font-bold font-primary text-lg">Message sent</h6>
                <p className="text-white">We will get back to you soon</p>
            </div>
            <div>
                <svg onClick={handleFormPopUp} className="w-6 text-white absolute top-3 right-3" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </div>
        </div>
     );
}
 
export default FormPopUp;