import styled from 'styled-components';
import { getPosition } from '../../Popover/Popup/styled/Popup.styled';
import { Placement } from '../../Popover/types';
import Options from '../../SingleSelect/Options';

export const CustomDateRangeOptions = styled(Options)<{ placement: Placement }>`
    height: max-content;
    ${getPosition};
    top: ${({ size, placement }) =>
        ((placement === 'bottom' || placement === 'bottom-start' || placement === 'bottom-end') && (size === 'S' ? '4rem' : '5.6rem')) ||
        'unset'};
`;
