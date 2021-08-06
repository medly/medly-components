import { styled } from '@medly-components/utils';
import Popover from '../Popover';

export const HelperAndErrorTextPopover = styled(Popover.Popup)`
    padding: 0.8rem;
`;

export const PopoverIconContainer = styled('div')`
    display: flex;
    :hover {
        cursor: pointer;
    }
`;

export const HelperAndErrorTextContainer = styled('span')`
    width: max-content;
    display: flex;
    border-radius: 4px;
    color: white;
    font-size: 1rem;
`;
