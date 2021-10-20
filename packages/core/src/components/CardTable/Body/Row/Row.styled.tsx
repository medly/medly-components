import styled from 'styled-components';
import { Props } from './types';

export const Row = styled('tr').attrs(({ withWhiteBackground, theme: { cardTable } }: Props) => ({
    bgTheme: withWhiteBackground ? 'lightBackground' : 'darkBackground',
    cardTable
}))<Props & { bgTheme: 'lightBackground' | 'darkBackground' }>`
    display: grid;
    grid-template-columns: ${({ gridTemplateColumns }) => gridTemplateColumns};
    cursor: ${({ onClick, isRowClickDisabled }) => (onClick && !isRowClickDisabled ? 'pointer' : 'inherit')};
    box-sizing: border-box;
    border-radius: 0.8rem;
    margin-bottom: 0.8rem;
    background-color: white;
    transition: box-shadow 100ms ease-out;
    border: 0.1rem solid ${({ bgTheme, cardTable }) => cardTable[bgTheme].borderColor};
    box-shadow: ${({ bgTheme, cardTable }) => cardTable[bgTheme].boxShadow};

    &:hover {
        box-shadow: ${({ bgTheme, cardTable }) => cardTable[bgTheme].hoverBoxShadow};
    }

    :nth-child(odd) {
        background: ${({ bgTheme, cardTable, isRowClickDisabled }) =>
            !isRowClickDisabled ? cardTable[bgTheme].oddRowBgColor : cardTable.disabledRowBgColor};
    }
    :nth-child(even) {
        background: ${({ bgTheme, cardTable, isRowClickDisabled }) =>
            !isRowClickDisabled ? cardTable[bgTheme].evenRowBgColor : cardTable.disabledRowBgColor};
    }
`;

export const NoResult = styled(Row)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem 0;
`;
