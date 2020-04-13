import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import LocalCafeIconSvg from '../../assets/Maps/local_cafe_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LocalCafeIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <LocalCafeIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

LocalCafeIcon.Style = SvgIcon;
LocalCafeIcon.displayName = 'LocalCafeIcon';

export default LocalCafeIcon
