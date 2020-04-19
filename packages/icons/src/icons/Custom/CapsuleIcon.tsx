import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import CapsuleIconSvg from '../../assets/Custom/capsule_24px.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CapsuleIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <CapsuleIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

CapsuleIcon.Style = SvgIcon;
CapsuleIcon.displayName = 'CapsuleIcon';

export default CapsuleIcon
