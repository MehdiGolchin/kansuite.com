import * as React from 'react';
import { Logo, Expr, HeaderStyle } from '../components';
import { HeaderTop } from '../components/top';

const backgroundStyle = {
  backgroundColor: '#000',
  height: '100vh',
  textAlign: 'center' as 'center'
}

const App = () => (
  <div style={backgroundStyle}> 
    <HeaderTop /> 
    <Logo />
    <HeaderStyle>KANSUITE</HeaderStyle>
    <Expr>EVENT-DRIVEN SERVERLESS PLATFORM</Expr>
  </div>
)

export default App;