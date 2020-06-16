import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import DialpadIconSvg from '../../assets/Communication/dialpad_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DialpadIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <DialpadIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

DialpadIcon.Style = SvgIcon;
DialpadIcon.displayName = 'DialpadIcon';

export default DialpadIcon
