import React from 'react';
//import { Link } from '../server/routes'
import Link from 'next/link';

export default class Login extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li><Link href="/logout"><a>Logout</a></Link></li>
            <li><Link href="/login"><a>Login</a></Link></li>
            <li><Link href="/"><a>Homepage</a></Link></li>
          </ul>
          <li><Link href="/github"><a>Github</a></Link></li>
        </nav>
      </div>
    );
  }
}

