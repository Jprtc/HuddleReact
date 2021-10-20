import {Container} from '../Container/Container.styled'
import {Flex} from '../Flex/Flex.styled'
import {StyledFooter} from './style'
import SocialIcons from '../SocialIcons/index'
import logoImg from '../../images/logo_white.svg'

export default function Footer(){
    return (
        <StyledFooter>
            <Container>
                <img src={logoImg} alt="logo"/>

            <Flex>
            <ul>
                <li>
                    Landing Page long description would go here so I'm just 
                    gonna write some stuff here to fit this space :D
                </li>
                <li>+55-999-999-9999</li>
                <li>example@email.com</li>
          </ul>
          <ul>
                <li><a href="#/">About Us</a></li>
                <li><a href="#/">What We Do</a></li>
                <li><a href="#/">FAQ</a></li>
          </ul>

          <ul>
                <li><a href="#/">Career</a></li>
                <li><a href="#/">Blog</a></li>
                <li><a href="#/">Contact Us</a></li>
          </ul> 
            <SocialIcons/>
            </Flex> 
            <p>&copy; 2021 Huddle. All rights reserved</p>
            </Container>
        </StyledFooter>
    )
}