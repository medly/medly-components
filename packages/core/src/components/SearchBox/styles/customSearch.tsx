import { styled } from '@medly-components/utils';

const CustomSearchFilterWrapper = styled.div<{ size: 'S' | 'M' }>`
    box-shadow: 0 0.2rem 1.6rem 0 rgba(72, 79, 94, 0.2);
    padding: 1.2rem;
    border-radius: 0.8rem;
    position: absolute;
    left: 0;
    top: ${({ size }) => (size === 'M' ? '4.7rem' : '3.9rem')};
    width: 100%;
    box-sizing: border-box;
    z-index: 5;
    background: white;
`;

export default CustomSearchFilterWrapper;
