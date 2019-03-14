import * as React from "react";
import Link from 'next/link';

const buttonStyle = {
    margin: 5,
    padding: 5,
    border: '1px solid #DDD',
    textDecoration: 'none'
}

const wrapperStyle = {
    textAlign: 'right' as 'right'
}

const Header = () => (
    <div style={wrapperStyle}>
        <Link href="/about">
            <a style={buttonStyle}>
            <img src={require('../images/octocat.png')} />SOURCE CODE</a>
      </Link>     
    </div>
)

export default Header
