import styled, { css } from 'styled-components';

export interface SubTitleProps {
    readonly color: string;
    readonly fontFamily?: string;
    readonly fonSize?: string;
    readonly upperCase?: boolean;
}

export const SubTitle = styled('h3') <SubTitleProps>`
    color: ${(props) => props.color};
    font-family: ${(props) => props.fontFamily};
    font-size: ${(props) => props.fonSize};
    ${(props) => props.upperCase && css`
        text-transform: uppercase;
    `}
`;