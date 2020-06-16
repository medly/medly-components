import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import { PopoverStyled } from './Popover.styled';
import { Props } from './types';

export const Popover: FC<Props> & WithStyle = React.memo(
    React.forwardRef((props, ref) => <PopoverStyled ref={ref} {...props} id={props.id || 'medly-popover'} />)
);
Popover.displayName = 'Popover';
Popover.Style = PopoverStyled;
Popover.defaultProps = {
    fullWidth: false,
    fullHeight: false
};
