import { styled } from '@medly-components/utils';
import { Props } from './types';

export const Row = styled('tr')<Props>`
    display: flex;
    flex-direction: row;
    cursor: ${({ onClick }) => (onClick ? 'pointer' : 'inherit')};
    box-sizing: border-box;
    border-radius: 0.8rem;
    margin-bottom: 0.8rem;
    background-color: white;
    box-shadow: ${({ withLightTheme }) => (withLightTheme ? 'none' : '0 0.2rem 0.8rem rgba(176,188,200,0.2)')};

    &:hover {
        box-shadow: ${({ withLightTheme }) =>
            withLightTheme ? '0 0.2rem 0.4rem rgba(176,188,200,0.60)' : '0 0.4rem 0.8rem rgba(176,188,200,0.60)'};
    }

    :nth-child(odd) {
        background: ${({ theme, withLightTheme }) =>
            withLightTheme ? theme.cardsTable.rowDisabledColor : theme.cardsTable.rowBackgroundColor};
    }
`;
//TODO: theme.cardsTable.rowDisabledColor to AlternateRow Color
