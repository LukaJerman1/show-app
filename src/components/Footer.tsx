import React from 'react';
import fb from "./pictures/fb.png";
import ig from "./pictures/ig.png";
import tw from "./pictures/tw.png";

function Footer(){

return(

    <div id="footer">

        <div className='footerDiv'>
            Home | Terms and Conditions | Privacy Policy | Collection Statement | Help | Manage Account<br /><br />
            
            <p className="gray">Copyright @ 2016 DEMO Streaming. All Right Reserved.</p><br />

            <img src={fb} alt="fb" /><img src={ig} alt="fb" /><img src={tw} alt="fb" />
        </div>
        
    </div>
)


}

export default Footer;