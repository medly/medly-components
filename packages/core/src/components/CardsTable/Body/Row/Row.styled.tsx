import { styled } from '@medly-components/utils';
import Card from '../../../Card';
import { Props } from './types';

export const Row = styled(Card)<Props>`
    cursor: ${({ disabled, onClick }) => (disabled ? 'not-allowed' : onClick ? 'grab' : 'inherit')};
    box-sizing: border-box;
    border-radius: 0.8rem;
    border: ${({ withLightTheme }) => withLightTheme ? 'default' : 'none'};
    box-shadow: ${({ withLightTheme }) => withLightTheme ? 'none' : '0 0.2rem 0.8rem rgba(176,188,200,0.2)'};
        
    &:hover {
        box-shadow: ${({ withLightTheme }) => withLightTheme ? '0 0.2rem 0.4rem rgba(176,188,200,0.60)' : '0 0.4rem 0.8rem rgba(176,188,200,0.60)'};
    };

    & > * {
        background-color: ${({ theme, disabled }) => `${disabled ? theme.cardsTable.rowDisabledColor : 'inherit'}`};
    };

    :nth-child(2n) {
        background: ${({ theme, withLightTheme}) => withLightTheme ? theme.cardsTable.rowDisabledColor : theme.cardsTable.rowBackgroundColor};
    };
`;