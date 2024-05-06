import styled, { css } from 'styled-components';
import { Props } from './types';

const getStyle = ({ withWhiteBackground, isRowClickDisabled }: Props) => {
    const bgTheme = withWhiteBackground ? 'lightBackground' : 'darkBackground';
    return css`
        border: 0.1rem solid ${({ theme }) => theme.cardTable[bgTheme].borderColor};
        box-shadow: ${({ theme }) => theme.cardTable[bgTheme].boxShadow};

        &:hover {
            box-shadow: ${({ theme }) => theme.cardTable[bgTheme].hoverBoxShadow};
        }

        :nth-child(odd) {
            background: ${({ theme }) =>
                !isRowClickDisabled ? theme.cardTable[bgTheme].oddRowBgColor : theme.cardTable.disabledRowBgColor};
        }
        :nth-child(even) {
            background: ${({ theme }) =>
                !isRowClickDisabled ? theme.cardTable[bgTheme].evenRowBgColor : theme.cardTable.disabledRowBgColor};
        }
    `;
};

export const Row = styled('tr')<Props>`
    display: grid;
    grid-template-columns: ${({ gridTemplateColumns }) => gridTemplateColumns};
    cursor: ${({ onClick, isRowClickDisabled }) => (onClick && !isRowClickDisabled ? 'pointer' : 'inherit')};
    box-sizing: border-box;
    border-radius: 0.8rem;
    margin-bottom: 0.8rem;
    background-color: white;
    transition: box-shadow 100ms ease-out;
    ${getStyle}
`;

export const NoResult = styled(Row)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem 0;
`;
