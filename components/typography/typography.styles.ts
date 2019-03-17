import styled, { css } from 'styled-components';

export interface TypographyProps {
    readonly upperCase?: boolean;
}

export const Title = styled('h1') <TypographyProps>`
    color: ${(props) => props.theme.titlecolor};
    ${(props) => props.upperCase && css`
        text-transform: uppercase;
    `}
`;

export const Subtitle = styled('h3') <TypographyProps>`
    color: ${(props) => props.theme.subtitlecolor};
    ${(props) => props.upperCase && css`
        text-transform: uppercase;
    `}
`;