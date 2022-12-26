import styled, {ThemeConsumer} from "styled-components";


const Btn = styled.button`
  color: ${props => props.theme.main};
`


function App() {
  // console.log(props);
  
  return (
    <div className="App">
      <Btn>你好</Btn>
    </div>
  )
}

export default App
