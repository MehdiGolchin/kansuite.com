import * as React from 'react';
import { Logo, Subtitle, Title, Row, Column } from '../components';
import { Default } from '../themes';

const App = () => (
  <Row cover vertical>
    <Column grow={2} gutter={50}>
      <Logo />
    </Column>
    <Column grow={1} justify="center">
      <Title theme={Default} upperCase>kansuite</Title>
      <Subtitle theme={Default} upperCase>event-driven serverless platform</Subtitle>
    </Column>
  </Row>
)

export default App;