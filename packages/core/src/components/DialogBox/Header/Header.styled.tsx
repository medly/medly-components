import { styled } from '@medly-components/utils';
import { DialogBoxHeaderProps } from './types';


export const Header = styled('div')<DialogBoxHeaderProps>`
    background-color: ${({ theme }) => theme.modal.backgroundColor};
    color: ${({ theme }) => theme.modal.headerColor};
    font-weight: 500;
    margin-bottom: 2.4rem;
`;
