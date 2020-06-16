import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import ViewQuiltIconSvg from '../../assets/Action/view_quilt_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ViewQuiltIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ViewQuiltIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ViewQuiltIcon.Style = SvgIcon;
ViewQuiltIcon.displayName = 'ViewQuiltIcon';

export default ViewQuiltIcon
