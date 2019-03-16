import styled, { css } from 'styled-components';

export interface TitleProps {
    readonly color: string;
    readonly fontFamily?: string;
    readonly fonSize?: string;
    readonly upperCase?: boolean;
}

export const Title = styled('h1') <TitleProps>`
    color: ${(props) => props.color};
    font-family: ${(props) => props.fontFamily};
    font-size: ${(props) => props.fonSize};
    ${(props) => props.upperCase && css`
        text-transform: uppercase;
    `}
`;