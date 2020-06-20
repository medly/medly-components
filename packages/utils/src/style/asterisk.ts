import { css } from '../styled';

export const asterisk = () => css`
    ::after {
        color: red;
        content: ' *';
    }
`;
