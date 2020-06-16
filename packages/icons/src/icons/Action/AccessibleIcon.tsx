import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import AccessibleIconSvg from '../../assets/Action/accessible_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AccessibleIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <AccessibleIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

AccessibleIcon.Style = SvgIcon;
AccessibleIcon.displayName = 'AccessibleIcon';

export default AccessibleIcon
