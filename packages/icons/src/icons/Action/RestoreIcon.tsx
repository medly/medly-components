import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import RestoreIconSvg from '../../assets/Action/restore_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const RestoreIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <RestoreIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

RestoreIcon.Style = SvgIcon;
RestoreIcon.displayName = 'RestoreIcon';

export default RestoreIcon
