import { Component } from 'react';
export interface TextFieldProps {
    readonly title: string;
    readonly placeholder?: string;
    readonly value?: string;
}
export declare class TextField extends Component<TextFieldProps> {
    constructor(props: TextFieldProps);
    render(): JSX.Element;
}
