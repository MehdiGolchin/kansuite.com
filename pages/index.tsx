import * as React from 'react';
import { Logo, Expr, Title, Row, Column } from '../components';

const App = () => (
  <Row cover vertical>
    <Column grow={2} gutter={50}>
      <Logo />
    </Column>
    <Column>
      <Title>KANSUITE</Title>
      <Expr>EVENT-DRIVEN SERVERLESS PLATFORM</Expr>
    </Column>
  </Row>
)

export default App;