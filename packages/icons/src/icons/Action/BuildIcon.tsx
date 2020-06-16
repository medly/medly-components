import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import BuildIconSvg from '../../assets/Action/build_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BuildIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <BuildIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

BuildIcon.Style = SvgIcon;
BuildIcon.displayName = 'BuildIcon';

export default BuildIcon
