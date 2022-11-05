
import { Link } from "react-router-dom";

function Contact() {
    return (
      <>
        <div className="max-w-[800px]" >
          <h2 className="text-3xl">Contact Me</h2>
          <p>Hi there . Contact me to ask me about anything you have in mind.</p>
           <div className="flex gap-x-8">
          <label id="First Name">First Name <br/><input className="rounded-md border block py-2 px-3 text-grey-darkest" placeholder="Enter your first name" required/></label>
          <label className="place-content-center items-start" id="Last Name">Last Name <br /><input className=" rounded-md border block py-2 px-3 text-grey-darkest justify-center" placeholder="Enter your last name"/></label>
           </div>
           <label> Email <input id="Email" className="justify-between rounded-md border py-2 px-3 w-full block" placeholder="yourname@email.com "/></label>
          <label >Message <textarea rows="5"  id="message" className="rounded-md border w-full block" placeholder="send me a message and i'll reply you as soon as possible"></textarea></label>
          <label > <input type="checkbox"/> You agree to providing valid data to who may contact you</label>
          <button className="max-w-[800px] w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded block" id="btn_submit">Send Message</button>
        
       
        <div className="justify-center space-x-20 m-auto flex w-full">
<p className="font-black">Zuri.Internship</p> 

 <p>HNG Internship 9 Frontend Task</p> 
 
  <img src="https://i.ytimg.com/vi/OR05gnlvTHY/maxresdefault.jpg" alt="I4G logo" width="10%" height="50px"/>
    </div>
    </div>
    <nav>
          <Link className="font-black" to="/">HOMEPAGE</Link>
        </nav>
      </>
    );
  }

export default Contact;