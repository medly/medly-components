import { styled } from '@medly-components/utils';
import Card from '../../../Card';
import { Props } from './types';

export const Row = styled(Card)<Props>`
    cursor: ${({ disabled, onClick }) => (disabled ? 'not-allowed' : onClick ? 'grab' : 'inherit')};
    box-shadow: none;
    box-sizing: border-box;
    border-radius: 0.8rem;
    border: ${({ withLightTheme }) => withLightTheme ? 'default' : 'none'};

    &:hover {
        box-shadow: ${({ withLightTheme, theme }) => withLightTheme ? `0px 2px 4px ${theme.colors.grey[400]}` : `0px 4px 8px ${theme.colors.grey[400]}`};
    };

    & > * {
        background-color: ${({ theme, disabled }) => `${disabled ? theme.table.rowDisabledColor : 'inherit'}`};
    };

    :nth-child(2n) {
        background: ${({ theme, withLightTheme}) => withLightTheme ? `${theme.colors.grey[100]}` : theme.table.rowBackgroundColor};
    };
`;


