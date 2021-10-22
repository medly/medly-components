import styled from 'styled-components';
import { StyledProps } from './types';

export const TabPanel = styled('div')<StyledProps>`
    &:focus {
        outline: none;
    }
    padding: 10px;
    height: 100%;
    width: 100%;
    display: ${({ isActive }) => (!isActive ? 'none' : 'block')};
`;
