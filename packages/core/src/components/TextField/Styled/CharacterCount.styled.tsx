import { styled, WithThemeProp } from '@medly-components/utils';

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

const getTextColor = ({
    maxLength,
    characterCount,
    theme,
    variant
}: { maxLength: number; characterCount: number; variant: 'fusion' | 'outlined' | 'filled' } & WithThemeProp) => {
    const characterCountPercentage = (characterCount / maxLength) * 100;

    if (characterCountPercentage === 100) {
        return theme.colors.red[500];
    } else if (characterCountPercentage >= 80) {
        return theme.colors.heartbeat[500];
    } else if (variant === 'fusion') {
        return theme.colors.grey[600];
    } else {
        return theme.colors.grey[500];
    }
};

const getTransform = (translateXValue: string) => ({ variant }: { variant: 'fusion' | 'outlined' | 'filled' }): string => {
    // If variant is fusion, we preserve the -167% translateY value which is applied on focus
    return variant === 'fusion' ? `transform: translate(${translateXValue}, -167%)` : `transform: translateX(${translateXValue})`;
};

export const CharacterCount = styled.div<{
    maxLength: number;
    characterCount: number;
    multiline?: boolean;
    size: 'S' | 'M';
    variant: 'fusion' | 'outlined' | 'filled';
    showTooltipForHelperAndErrorText: boolean;
}>`
    @keyframes wiggle {
        0% {
            ${getTransform('0.1rem')};
        }
        25% {
            ${getTransform('-0.2rem')};
        }
        50% {
            ${getTransform('0.2rem')};
        }
        75% {
            ${getTransform('-0.1rem')};
        }
        100% {
            ${getTransform('0')};
        }
    }
    font-size: 1rem;
    line-height: 1rem;
    position: absolute;
    top: 0;
    right: 0;
    color: ${getTextColor};
    align-self: flex-start;
    z-index: 1;
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
    margin-top: ${getMarginTop};
    margin-left: ${({ size }) => size === 'S' && '1.2rem'};
    margin-right: ${({ showTooltipForHelperAndErrorText }) => showTooltipForHelperAndErrorText && '.8rem'};
    animation: ${({ characterCount, maxLength }) => characterCount === maxLength && `0.2s wiggle ease-in-out`};
`;
