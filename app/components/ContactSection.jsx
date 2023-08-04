"use client"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

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
                    <form ref={form} onSubmit={sendEmail} className="flex flex-row">
                        <div className="flex flex-col">
                            <label>Name</label>
                            <input type="text" name="user_name" placeholder='*Name' required />
                            <label>Email</label>
                            <input type="email" name="user_email" placeholder='*Email' required />
                            <label>Message</label>
                            <textarea name="message" placeholder='Your message' required />
                        </div>
                        <div className="flex flex-col">
                            <label>Contact number</label>
                            <input type="tel" name="user_number" />
                            <label>Interested in</label>
                            <select name="interested" id="id">
                                <option value="diet">diet</option>
                                <option value="gym">gym</option>
                            </select>
                            <input type="submit" value="Send" />
                        </div>
                        
                        
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