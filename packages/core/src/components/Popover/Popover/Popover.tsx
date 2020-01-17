import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import { PopoverStyled } from './Popover.styled';
import { Props } from './types';

export const Popover: SFC<Props> & WithStyle = React.memo(
    React.forwardRef((props, ref) => <PopoverStyled ref={ref} {...props} data-testid="medly-popover" />)
);
Popover.displayName = 'Popover';
Popover.Style = PopoverStyled;
Popover.defaultProps = {
    fullWidth: false,
    fullHeight: false
};
