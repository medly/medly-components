import { WithStyle } from '@medly-components/utils';
import React, { useState } from 'react';
import { PopoverStyled as Popover, PopoverWrapperStyled } from './Popover.styled';
import { PopOverWrapperProps } from './types';

export const PopoverWrapper: React.SFC<PopOverWrapperProps> & WithStyle = props => {
    const [isOpen, setPopoverOpenState] = useState(false);

    const handleOnClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (props.interactionType === 'click') {
            const length = e.currentTarget.children.length - 1;
            const popover = e.currentTarget.children[length] as HTMLElement;
            popover.style.display = isOpen ? 'none' : 'block';
            setPopoverOpenState(!isOpen);
        }
    };

    return <PopoverWrapperStyled {...props} onClick={handleOnClick} data-testid="popover-wrapper" />;
};

PopoverWrapper.defaultProps = {
    interactionType: 'hover',
    placement: 'bottom'
};

PopoverWrapper.Style = PopoverWrapperStyled;

export { Popover };
