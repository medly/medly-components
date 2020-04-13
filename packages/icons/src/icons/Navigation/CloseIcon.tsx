import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import CloseIconSvg from '../../assets/Navigation/close_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CloseIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <CloseIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

CloseIcon.Style = SvgIcon;
CloseIcon.displayName = 'CloseIcon';

export default CloseIcon
