import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import AtmIconSvg from '../../assets/Maps/atm_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AtmIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <AtmIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

AtmIcon.Style = SvgIcon;
AtmIcon.displayName = 'AtmIcon';

export default AtmIcon
