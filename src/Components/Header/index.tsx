import {StyledHeader, Nav,Logo, Image} from './style'
import {Container} from '../Container/Container.styled'
import {Button} from '../Button/Button.styled'
import {Flex} from '../Flex/Flex.styled'
import logoImg from '../../images/logo.svg'
import illustrationImg from '../../images/illustration-mockups.svg'


export default function Header(){
    return(
        <StyledHeader>
            <Container>
            <Nav>
                <Logo src={logoImg} alt='logoImg'/>
                <Button>Try it free!</Button>
            </Nav>
            <Flex>
                <div>
                    <h1>Build The Community Your Fans Will Love!</h1>

                    <p>
                    Huddle re-imagines the way we build communities. You have a voice,
                    but so does your audience. Create connections with your users as
                    you engage in genuine discussion.
                    </p>

                    <Button bg="#ff0099" color="#fff">
                        Get Started for Free!
                    </Button>
                </div>

                <Image src={illustrationImg} alt="Illustration image"/>
            
            </Flex>
            </Container>
        </StyledHeader>
    )
}