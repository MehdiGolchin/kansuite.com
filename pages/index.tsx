import * as React from 'react';
import { Logo, SubTitle, Title, Row, Column } from '../components';

const App = () => (
  <Row cover vertical>
    <Column grow={2} gutter={50}>
      <Logo />
    </Column>
    <Column>
      <Title color="#fff" fontFamily="Tahoma" upperCase>kansuite</Title>
      <SubTitle color="#808080" fontFamily="Tahoma" upperCase>event-driven serverless platform</SubTitle>
    </Column>
  </Row>
)

export default App;