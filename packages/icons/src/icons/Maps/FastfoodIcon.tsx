import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FastfoodIconSvg from '../../assets/Maps/fastfood_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FastfoodIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <FastfoodIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

FastfoodIcon.Style = SvgIcon;
FastfoodIcon.displayName = 'FastfoodIcon';

export default FastfoodIcon
