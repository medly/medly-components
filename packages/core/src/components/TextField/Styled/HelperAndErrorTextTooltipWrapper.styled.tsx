import styled from 'styled-components';

export const HelperAndErrorTextTooltipWrapper = styled.div<{ displayCharacterCount: boolean; size: 'S' | 'M'; isSuffixPresent: boolean}>`
    margin-top: 0.5rem;
    ${({ isSuffixPresent }) => !isSuffixPresent && 'margin-right: 1rem;'}
    ${({ displayCharacterCount, size }) => (!displayCharacterCount || size !== 'S' ) && 'margin-left: 1rem;'}
`;
