import styled from 'styled-components';

export const HelperAndErrorTextTooltipWrapper = styled.div<{ displayCharacterCount: boolean; size: 'S' | 'M'; isSuffixPresent: boolean; }>`
    margin-top: 0.5rem;
    margin-right: ${({ isSuffixPresent }) => !isSuffixPresent && '1rem'};
    margin-left: ${({ displayCharacterCount, size }) => (!displayCharacterCount || size !== 'S' ) && '1rem'};
`;
