import { css } from 'styled-components';

export const asterisk = () => css`
    ::after {
        color: red;
        content: ' *';
    }
`;
