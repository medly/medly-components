import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import MmsIconSvg from '../../assets/Notification/mms_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const MmsIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <MmsIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

MmsIcon.Style = SvgIcon;
MmsIcon.displayName = 'MmsIcon';

export default MmsIcon
