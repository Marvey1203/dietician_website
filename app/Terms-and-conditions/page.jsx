import Link from "next/link";

const cookiePolicy = () => {
    return ( 
        <div className="w-3/4 mx-auto flex-col flex justify-start items-start gap-4 font-primary">
            <h5 className="font-bold text-3xl py-3">Website Terms and Conditions</h5>
            <p>By using this website, you agree to comply with and be bound by the following terms and conditions. If you do not agree to these terms and conditions, please do not use this website.</p>
            <h6 className="font-semibold text-2xl py-2">Consultation Services and Cancellation Policy:</h6>
            <p>The following terms and conditions apply to the consultation services provided by Tanelle Schutte ("the Dietitian") through this website:</p>
            <div className="pl-5">
                <p>1.<span className="font-semibold text-lg px-2">Consultation Services:</span> The Dietitian provides dietary and nutrition-related advice and guidance as part of their private practice. The information provided on this website is for informational purposes only and should not be considered as a substitute for professional medical advice.</p>
                <p>2.<span className="font-semibold text-lg px-2">No Medical Scheme Submissions:</span> Please note that the Dietitian's private practice does not submit claims to medical schemes on behalf of patients. Clients are responsible for the full payment of consultation fees but are welcome so submit a claim to their medical scheme on their own behalf. </p>
                <p>3.<span className="font-semibold text-lg px-2">Cancellation Policy:</span> If you wish to cancel or reschedule a consultation, you must provide a minimum of 24 hours' notice prior to the scheduled consultation date and time. Failure to provide sufficient notice may result in the full consultation fee being charged.</p>
            </div>
            <h6 className="font-semibold text-2xl py-2">Use of Content:</h6>
            <div className="pl-5">
                <p>4.<span className="font-semibold text-lg px-2">Intellectual Property:</span> All content provided on this website, including but not limited to text, graphics, logos, images, videos, and any other materials, is the property of the Dietitian and is protected by applicable copyright and intellectual property laws. You may not reproduce, distribute, modify, or otherwise use any content without prior written consent from the Dietitian.</p>
                <p>5.<span className="font-semibold text-lg px-2">Personal Use:</span> You may use the content on this website for personal, non-commercial purposes only. You may not use the content for commercial purposes or for any other unauthorised use.</p>
            </div>
            <h6 className="font-semibold text-2xl py-2">Disclaimer:</h6>
            <div className="pl-5">
                <p>6.<span className="font-semibold text-lg px-2">No Medical Advice:</span> The information provided on this website is intended for general informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of a qualified healthcare provider with any questions you may have regarding a medical condition.</p>
                <p>7.<span className="font-semibold text-lg px-2">Accuracy of Information:</span> The Dietitian strives to provide accurate and up-to-date information on this website. However, no guarantee is made regarding the accuracy, completeness, or reliability of the content. The Dietitian disclaims any liability for any errors or omissions in the content provided.</p>
            </div>
            <h6 className="font-semibold text-2xl py-2">Privacy and Confidentiality:</h6>
            <div className="pl-5">
                <p>8.<span className="font-bold text-lg px-2">Privacy Policy:</span> Your privacy is important. The Dietitian's Privacy Policy outlines how your personal information is collected, used, and protected. By using this website, you consent to the practices described in the <Link href={'/Privacy-policy'}>Privacy Policy.</Link></p>
            </div>
            <h6 className="font-semibold text-2xl py-2">General:</h6>
            <div className="pl-5">
                <p>1.<span className="font-semibold text-lg px-2">Modification of Terms</span> The Dietitian reserves the right to modify or amend these terms and conditions at any time. Any changes will be effective immediately upon posting on this website. Your continued use of the website following any modifications constitutes your acceptance of the revised terms.</p>
                <p>2.<span className="font-semibold text-lg px-2">Governing Law:</span> These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which the Dietitian's practice is located.</p>
                <p>3.<span className="font-semibold text-lg px-2">Contact:</span> If you have any questions or concerns regarding these terms and conditions, please contact the Dietitian using the contact information provided on this website.</p>
            </div>
            <p>By using this website, you acknowledge that you have read, understood, and agreed to these terms and conditions. If you do not agree with any part of these terms, please refrain from using the website</p>

        </div>
     );
}
 
export default cookiePolicy;