import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import RowingIconSvg from '../../assets/Action/rowing_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const RowingIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <RowingIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

RowingIcon.Style = SvgIcon;
RowingIcon.displayName = 'RowingIcon';

export default RowingIcon
