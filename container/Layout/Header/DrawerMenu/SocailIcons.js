import React from 'react';
import { Instagram, Youtube, LinkedinSquare, Facebook, Twitter} from '@styled-icons/boxicons-logos'; 
const SocailIcons = () => {
    return (
        <div>
            <div className="social-icon">
                <Instagram size={28} />
            </div>
            <div className="social-icon">
                <Youtube size={28} />
            </div>
            <div className="social-icon">
                <LinkedinSquare size={28} />
            </div>
            <div className="social-icon">
                <Facebook size={28} />
            </div>
            <div className="social-icon">
                <Twitter size={28} />
            </div> 
        </div>
    )
}

export default SocailIcons;


