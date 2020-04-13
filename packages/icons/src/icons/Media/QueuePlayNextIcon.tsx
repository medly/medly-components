import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import QueuePlayNextIconSvg from '../../assets/Media/queue_play_next_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const QueuePlayNextIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <QueuePlayNextIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

QueuePlayNextIcon.Style = SvgIcon;
QueuePlayNextIcon.displayName = 'QueuePlayNextIcon';

export default QueuePlayNextIcon
