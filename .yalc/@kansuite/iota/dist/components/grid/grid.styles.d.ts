export interface RowProps {
    readonly vertical?: boolean;
    readonly cover?: boolean;
    readonly gutter?: number;
}
export interface ColumnProps {
    readonly grow?: number;
    readonly justify?: string;
}
export declare const Row: import("styled-components").StyledComponent<"div", any, RowProps, never>;
export declare const Column: import("styled-components").StyledComponent<"div", any, ColumnProps, never>;
