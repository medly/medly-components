import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import RepeatOneIconSvg from '../../assets/Media/repeat_one_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const RepeatOneIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <RepeatOneIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

RepeatOneIcon.Style = SvgIcon;
RepeatOneIcon.displayName = 'RepeatOneIcon';

export default RepeatOneIcon
