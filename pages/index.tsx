import * as React from 'react';
import { Title, Subtitle, Row, Column } from '@kansuite/iota';
import { Logo } from '../components';
import Link from 'next/link';

const App = () => (
  <Row cover vertical gutter={50}>
    <Column grow={1} justify="left">
      <nav>
        <ul>
          <li><Link href="/logout"><a>Logout</a></Link></li>
          <li><Link href="/login"><a>Login</a></Link></li>
        </ul>
      </nav>
    </Column>
    <Column grow={2}>
      <Logo />
    </Column>
    <Column grow={1} justify="center">
      <Title upperCase>Kansūite</Title>
      <Subtitle upperCase>Event-driven Serverless Platform</Subtitle>
    </Column>
  </Row>
)

export default App;