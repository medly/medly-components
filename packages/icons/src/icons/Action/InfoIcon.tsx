import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import InfoIconSvg from '../../assets/Action/info_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const InfoIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <InfoIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

InfoIcon.Style = SvgIcon;
InfoIcon.displayName = 'InfoIcon';

export default InfoIcon
