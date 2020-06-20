import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import PollIconSvg from '../../assets/Social/poll_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PollIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PollIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

PollIcon.Style = SvgIcon;
PollIcon.displayName = 'PollIcon';

export default PollIcon
