import { css } from 'styled-components';

export const ContentCSS = css`
    pre > pre {
        overflow: auto !important;
        border-radius: 0.8rem !important;
        padding: 3.6rem 2rem 3rem !important;
        background-image: url(/images/website/window_buttons.png) !important;
        background-repeat: no-repeat !important;
        background-size: 4.4rem 1rem !important;
        background-position: 1.6rem 1.4rem !important;
    }

    figure {
        margin: 0;
    }

    blockquote {
        border-left: 0.8rem ${({ theme }) => theme.colors.grey[100]} solid;
        margin: 0;
        padding-left: 4rem;
    }

    code {
        background-color: ${({ theme }) => theme.colors.grey[100]};
        color: #f08d49;
        padding: 0 0.4rem;
        border-radius: 0.3rem;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        border-radius: 0.8rem;
        border-style: hidden;
        overflow: hidden;
        box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.grey[300]};
    }
    table,
    td,
    th {
        padding: 0.8rem 1.6rem;
        border: 1px solid ${({ theme }) => theme.colors.grey[300]};
    }

    iframe {
        width: 82.4rem;
        height: 45.3rem;
        max-width: 100%;
        border-radius: 0.8rem;
        max-height: calc((100vw - 40px) / (16 / 9));
    }

    h4 {
        margin-bottom: 0;
    }
`;
