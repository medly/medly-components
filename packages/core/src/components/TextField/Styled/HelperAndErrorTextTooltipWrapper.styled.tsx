import styled from 'styled-components';

export const HelperAndErrorTextTooltipWrapper = styled.div<{ displayCharacterCount: boolean; size: 'S' | 'M' }>`
    ${({ displayCharacterCount, size }) => (!displayCharacterCount || size !== 'S') && 'margin-left: 1rem;'}
`;
