import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import LabelOffIconSvg from '../../assets/Action/label_off_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LabelOffIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <LabelOffIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

LabelOffIcon.Style = SvgIcon;
LabelOffIcon.displayName = 'LabelOffIcon';

export default LabelOffIcon
