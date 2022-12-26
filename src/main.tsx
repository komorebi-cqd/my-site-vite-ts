import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider, ThemeConsumer } from 'styled-components'
import GlobalStyle from './style'
import App from './App'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={{
    fontFamily: '微软雅黑',
    main: 'mediumseagreen'
  }}>
    <React.StrictMode>
      <GlobalStyle />
      <App />
    </React.StrictMode>
  </ThemeProvider>
  ,
)
