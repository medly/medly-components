import { styled } from '@medly-components/utils';
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
        background: ${({ bgTheme, cardTable }) => cardTable[bgTheme].oddRowBgColor};
    }
    :nth-child(even) {
        background: ${({ bgTheme, cardTable }) => cardTable[bgTheme].evenRowBgColor};
    }
`;


export const NoResult = styled(Row)`
    display: flex;
    padding: 1.0rem 0;
`;
