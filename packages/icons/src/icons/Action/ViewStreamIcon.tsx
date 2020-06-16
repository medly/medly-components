import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import ViewStreamIconSvg from '../../assets/Action/view_stream_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ViewStreamIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ViewStreamIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ViewStreamIcon.Style = SvgIcon;
ViewStreamIcon.displayName = 'ViewStreamIcon';

export default ViewStreamIcon
