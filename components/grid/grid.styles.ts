import styled, { css } from 'styled-components';

export interface RowProps {
    readonly vertical?: boolean;
    readonly cover?: boolean;
}

export interface ColumnProps {
    readonly grow?: number;
    readonly gutter?: number;
}

export const Row = styled('div') <RowProps>`
    display: flex;
    align-items: stretch;
    flex-direction: ${(props) => props.vertical ? 'column' : 'row'};
    ${(props) => props.cover && css`
        height: 100%;
    `}
`;

export const Column = styled('div') <ColumnProps>`
    background-color: black;
    ${(props) => props.grow && css`
        flex: ${props.grow};
    `};
    ${(props) => props.gutter && css`
        padding: ${props.gutter}px;
    `}
`;