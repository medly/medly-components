import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import NextWeekIconSvg from '../../assets/Content/next_week_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const NextWeekIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <NextWeekIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

NextWeekIcon.Style = SvgIcon;
NextWeekIcon.displayName = 'NextWeekIcon';

export default NextWeekIcon
