import { styled } from '@medly-components/utils';
import Popover from '../../Popover';

export const HelperText = styled('span')<{
    size: 'S' | 'M';
    variant: 'fusion' | 'outlined' | 'filled';
}>`
    font-size: 1.2rem;
    line-height: 1.6rem;
    margin: ${({ variant }) => (variant === 'fusion' ? '0.4rem' : '0.5rem')} ${({ size }) => (size === 'S' ? '1.2rem' : '1.6rem')} 0;
    white-space: initial;
    user-select: none;
`;

export const HelperTextPopover = styled(Popover.Popup)`
    padding: 10px;
`;

export const PopoverIconContainer = styled('div')`
    display: flex;
    :hover {
        cursor: pointer;
    }
`;

export const HelperTextForTooltip = styled('span')`
    width: max-content;
    display: flex;
    border-radius: 4px;
    color: white;
    font-size: 1rem;
`;
