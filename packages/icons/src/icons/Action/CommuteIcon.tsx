import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import CommuteIconSvg from '../../assets/Action/commute_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CommuteIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <CommuteIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

CommuteIcon.Style = SvgIcon;
CommuteIcon.displayName = 'CommuteIcon';

export default CommuteIcon
