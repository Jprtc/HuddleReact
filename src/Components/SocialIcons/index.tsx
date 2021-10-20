import {FaTwitter,FaFacebook,FaLinkedin} from 'react-icons/fa'
import {StyledSocialIcons} from './style'

export default function SocialIcons(){
    return(
        <StyledSocialIcons>
            <li>
                <a href="https://twitter.com/">
                    <FaTwitter/>
                </a>
                <a href="https://facebook.com">
                    <FaFacebook/>
                </a>
                <a href="https://linkedin.com/">
                    <FaLinkedin/>
                </a>
            </li>
        </StyledSocialIcons>
    )
}