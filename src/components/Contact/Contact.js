import React from 'react';
import'./Contact.css';

import Footer from '../Footer/Footer';
import Banner from '../Banner/Banner';

const Contact = () => {
    return (
<>
        <Banner/>
    <div><h1>Contact Us 🤳</h1>
    <div class="containet">
    

    <form className="form">
     <label >First Name</label>
    <input type="text"   placeholder="Your name.."/>
      <br></br>

      <label >Last Name</label>
    <input type="text"   placeholder="Your last name.."/>
   <br></br>

   <label >Subject</label>
    <textarea   placeholder="Write something.."></textarea>

    <br></br>
   <input type="submit" value="Submit"/>
    </form>

    </div>

 </div>
 <Footer/>
</>
    );
};

export default Contact;