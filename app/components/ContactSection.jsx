"use client"
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import FormPopUp from './FormPopUp';

const ContactSection = () => {
    const [formPopUpStatus, setFormPopUpStatus] = useState(false)
    const handleFormPopUp = () => {
        setFormPopUpStatus(false)
    }
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_o1qb9cg', 'template_efjszy6', form.current, 'cku0au9LhJiZ6I12D')
          .then((result) => {
              console.log(result.text);
              document.getElementById('contact-form').reset()
              setFormPopUpStatus(true)
          }, (error) => {
              console.log(error.text);
          });
          setTimeout(() => {
            setFormPopUpStatus(false)
          }, 8000);
      };

    return ( 
        <div className="w-full flex lg:flex-row flex-col" id="contact">
            <div className="flex flex-col border w-full lg:w-1/3 justify-center px-12 gap-2 border-black py-10">
                <h4 className="text-4xl font-semibold">Contact</h4>
                <div className="pl-4">
                    <p className="text-[20px] font-primary">Tanelle Schutte</p>
                    <a href="mailto:tanelleschutte@gmail.com" className='text-[20px]'>tanelleschutte@gmail.com</a><br/>
                    <a href="tel:0825985341" className='text-[20px]'>082 598 5341</a>
                </div>
                <h4 className="text-4xl font-semibold">Address</h4>
                <div className="pl-4">
                    <p className='text-[20px]'>24 Church Street</p>
                    <p className='text-[20px]'>Swellendam 6740</p>
                </div>
            </div>
            <div className="lg:w-2/3 w-full flex flex-col border border-black">
                <div className="h-6/10 flex flex-row gap-5 border border-black p-5 w-full">
                    <form ref={form} onSubmit={sendEmail} id='contact-form' className="flex md:flex-row flex-col w-full gap-7 items-center flex-center">
                        <div className="flex flex-col md:w-[50%] w-full gap-5">
                            <input type="text" name="user_name" placeholder='*Name' required className='p-3 text-gray-950 border border-black' />
                            <input type="email" name="user_email" placeholder='*Email' required  className='p-3 text-gray-950 border border-black'/>
                            <textarea name="message" placeholder='Your message' required className='p-3 text-gray-950 border border-black md:block hidden' />
                        </div>
                        <div className="flex flex-col md:w-[50%] w-full h-full gap-5">
                            <input type="tel" name="user_number" placeholder='*Contact number' required className='p-3 text-gray-950 border border-black'/>
                            <select name="interested" id="id" className="p-3 text-black placeholder-gray-950 border border-black">
                                <option value="" disabled selected hidden>I'm interested in...</option>
                                <option value="healthy_eating" className="hover:cursor-pointer">Healthy Eating</option>
                                <option value="sport_nutrition" className="hover:cursor-pointer">Sport Nutrition</option>
                                <option value="hchd" className="hover:cursor-pointer">High Cholesterol/Hypertension/Diabetes</option>
                                <option value="weight_loss" className="hover:cursor-pointer">Weight Loss</option>
                                <option value="other" className="hover:cursor-pointer">Other</option>
                                
                            </select>
                            <textarea rows={"5"} name="message" placeholder='Your message' required className='p-3 text-gray-950 border border-black md:hidden block ' />
                            <div className='w-full md:h-full flex justify-end items-end'>
                                <input type="submit" value="> Send" className="py-2 px-10 bg-black text-white font-primary text-lg hover:font-bold" />
                            </div>
                            {
                                formPopUpStatus && <FormPopUp handleFormPopUp={handleFormPopUp}/>
                            }
                            
                        </div>
                        
                        
                    </form>

                </div>
                <div className="h-4/10 flex flex-col gap-2 border border-black p-5">
                    <h5 className="text-xl font-semibold">*Disclaimer</h5>
                    <p>
                        This is a private practice. I do not submit claims to medical aids on behalf of patients. You are welcome to submit a claim on your own behalf after you’ve paid the consultation fee.
                    </p>
                </div>
            </div>
        </div>
     );
}
 
export default ContactSection;