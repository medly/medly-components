import { styled } from '@medly-components/utils';

const getMarginTop = ({ size, multiline }: { multiline?: boolean; size: 'S' | 'M' }) => {
    if (multiline) return '.1rem';

    switch (size) {
        case 'S':
            return '1.5rem';
        case 'M':
        default:
            return '1.2rem';
    }
};

export const CharacterCount = styled.div<{ multiline?: boolean; size: 'S' | 'M'; variant: 'fusion' | 'outlined' | 'filled' }>`
    font-size: 1rem;
    line-height: 1rem;
    position: absolute;
    top: 0;
    right: 0;
    color: ${({ theme, variant }) => (variant === 'fusion' ? theme.colors.grey[600] : theme.colors.grey[500])};
    align-self: flex-start;
    z-index: 50;
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
    margin-top: ${getMarginTop};
    margin-left: ${({ size }) => size === 'S' && '1.2rem'};
`;
