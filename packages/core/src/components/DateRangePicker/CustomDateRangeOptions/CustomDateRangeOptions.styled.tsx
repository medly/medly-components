import { styled } from '@medly-components/utils';
import { getPosition } from '../../Popover/Popup/styled/Popup.styled';
import Options from '../../SingleSelect/Options';

export const SelectOptions = styled(Options)`
    height: max-content;
    ${getPosition};
    top: ${({ size, placement }) =>
        ((placement === 'bottom' || placement === 'bottom-start' || placement === 'bottom-end') && (size === 'S' ? '4rem' : '5.6rem')) ||
        'unset'};
`;
