import { styled } from '@medly-components/utils';

export const CustomSearchFilterWrapper = styled.div<{ size: 'S' | 'M' }>`
    box-shadow: 0 0.2rem 1.6rem 0 rgba(72, 79, 94, 0.2);
    padding: 1.2rem;
    border-radius: 0.8rem;
    position: absolute;
    left: 0;
    top: ${({ theme, size }) => `calc(${theme.searchBox.height[size]} - 0.1rem) `};
    width: 100%;
    box-sizing: border-box;
    z-index: 5;
    background: white;
`;
