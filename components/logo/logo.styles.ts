import styled from 'styled-components';
import logo from './logo.svg';

export const Logo = styled.span`
    display: block;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('${logo}');
`;