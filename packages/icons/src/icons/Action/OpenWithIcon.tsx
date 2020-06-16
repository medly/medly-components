import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import OpenWithIconSvg from '../../assets/Action/open_with_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const OpenWithIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <OpenWithIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

OpenWithIcon.Style = SvgIcon;
OpenWithIcon.displayName = 'OpenWithIcon';

export default OpenWithIcon
