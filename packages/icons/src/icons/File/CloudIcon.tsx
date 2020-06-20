import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import CloudIconSvg from '../../assets/File/cloud_24px.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CloudIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <CloudIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

CloudIcon.Style = SvgIcon;
CloudIcon.displayName = 'CloudIcon';

export default CloudIcon
