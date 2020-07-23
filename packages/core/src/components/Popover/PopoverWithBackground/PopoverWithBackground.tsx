import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import { PopoverContent, PopoverStyled } from './PopoverWithBackground.styled';
import { Props } from './types';

export const PopoverWithBackground: FC<Props> & WithStyle = React.memo(props => (
    <PopoverStyled {...props} id={props.id || 'medly-popover'}>
        <PopoverContent>{props.children}</PopoverContent>
    </PopoverStyled>
));
PopoverWithBackground.displayName = 'PopoverWithBackground';
PopoverWithBackground.Style = PopoverStyled;
PopoverWithBackground.defaultProps = {
    fullWidth: false,
    fullHeight: false,
    placement: 'top'
};
