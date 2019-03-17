import styled, { css } from 'styled-components';

export interface TypographyProps {
    readonly upperCase?: boolean;
}

export const Title = styled('h1') <TypographyProps>`
    color: ${(props) => props.theme.titlecolor};
    font-family: ${(props) => props.theme.fontfamily};
    ${(props) => props.upperCase && css`
        text-transform: uppercase;
    `}
`;

export const Subtitle = styled('h3') <TypographyProps>`
color: ${(props) => props.theme.subtitlecolor};
font-family: ${(props) => props.theme.fontfamily};
src: local('Open Sans Light'), url('./fonts/OpenSans-Light.woff2') format('woff2');
    ${(props) => props.upperCase && css`
        text-transform: uppercase;
    `}
`;