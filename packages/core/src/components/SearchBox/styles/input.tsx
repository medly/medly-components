import styled from 'styled-components';

export const SearchInput = styled.input`
    background: transparent;
    color: ${({ theme }) => theme.searchBox.textColor};
    padding: 0;
    outline: none;
    border: 0 none;
    min-width: 12.9rem;
    flex-grow: 1;
    font-family: inherit;
    font-weight: ${({ theme }) => theme.font.weights.Medium};

    &::placeholder {
        color: ${({ theme }) => theme.searchBox.placeholderTextColor.default};
    }
    &:focus {
        &::placeholder {
            color: ${({ theme }) => theme.searchBox.placeholderTextColor.active};
        }
    }
`;
