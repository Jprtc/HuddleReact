import {ThemeProvider} from 'styled-components'
import Header from './Components/Header/'
import {Container} from './Components/Container/Container.styled'
import GlobalStyle from './GlobalStyle'

const theme ={
  colors:{
    header: '#ebfbff',
    body:'#fff',
    footer:'#003333',
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
    <>
      <GlobalStyle/>
      <Header/>
      <Container>
        <h1>Hello World!</h1>
      </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
