const ContactSection = () => {
    return ( 
        <div className="w-full flex flex-row">
            <div className="flex flex-col border w-1/3 justify-center px-12 gap-2 border-black py-10">
                <h4 className="text-4xl font-semibold">Contact</h4>
                <div className="pl-4">
                    <a href="mailto:tanelleschutte@gmail.com">tanelleschutte@gmail.com</a><br/>
                    <a href="tel:0825985341">082 598 5341</a>
                </div>
                <h4 className="text-4xl font-semibold">Address</h4>
                <div className="pl-4">
                    <p>24 church street</p>
                    <p>Swellendam 6740</p>
                </div>
            </div>
            <div className="w-2/3 flex flex-col border border-black">
                <div className="h-6/10 flex flex-row gap-2 border border-black p-5">
                    <form>
                        <input type="text" placeholder="Name"  />
                    </form>

                </div>
                <div className="h-4/10 flex flex-col gap-2 border border-black p-5">
                    <h5 className="text-xl font-semibold">*Disclaimer</h5>
                    <p>
                        This is a private practice. I do not submit claims to medical aids on behalf of patients. You are welcome to submit a claim on your own behalf after you’ve paid the consultation fee. Here you ca view a PDF with information on common  medical aid schemes and their respective benefits for dietitian consultations.
                    </p>
                </div>
            </div>
        </div>
     );
}
 
export default ContactSection;