import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import PublishIconSvg from '../../assets/Editor/publish_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PublishIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PublishIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

PublishIcon.Style = SvgIcon;
PublishIcon.displayName = 'PublishIcon';

export default PublishIcon
