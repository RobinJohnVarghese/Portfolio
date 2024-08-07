import { Link } from "react-router-dom";

import { socialLinks } from "../constants";

const Footer = () => {
  return (
    <footer className='footer font-poppins'>
      <hr className='border-slate-200' />

      <div className='footer-container'>
        <p>
          © 2024 <strong>Robin John Varghese</strong>. All rights reserved.
        </p>

        <div className='flex gap-3 justify-center items-center'>
            <a href="mailto:robinvarghesejohn1998@gmail.com">
                <img width="30" height="30" src="https://img.icons8.com/emoji/48/e-mail.png" alt="e-mail"/>
            </a>
            <a href="https://wa.me/918281065621">
                <img width="30" height="30" src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="whatsapp--v1"/>
            </a>
            
          {socialLinks.map((link) => (
            <Link key={link.name} to={link.link} target='_blank'>
              <img
                src={link.iconUrl}
                alt={link.name}
                className='w-6 h-6 object-contain'
              />
            </Link>
          ))}
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
