import { createGlobalStyle, css, injectGlobal } from 'styled-components';

// ${(props) => props.theme.fonts && props.theme.fonts.map(file => css`
//             @import url(${file});
//         `)}

        //@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400');
        //font-family: Open Sans;

export const GlobalStyle = createGlobalStyle`
    html, body, #__next {
        ${(props) => props.theme.fonts && props.theme.fonts.map(file => css`
                    @import url(${file});
                `)}
        color: ${(props) => props.theme.titlecolor};    
        font-family: ${(props) => props.theme.fontFamily};        
        background-color: ${(props) => props.theme.backgroundColor};
        height: 100%;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;