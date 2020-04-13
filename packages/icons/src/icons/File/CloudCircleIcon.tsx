import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import CloudCircleIconSvg from '../../assets/File/cloud_circle_24px.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CloudCircleIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <CloudCircleIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

CloudCircleIcon.Style = SvgIcon;
CloudCircleIcon.displayName = 'CloudCircleIcon';

export default CloudCircleIcon
