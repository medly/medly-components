import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import ArrowBackIconSvg from '../../assets/Navigation/arrow_back_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ArrowBackIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ArrowBackIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ArrowBackIcon.Style = SvgIcon;
ArrowBackIcon.displayName = 'ArrowBackIcon';

export default ArrowBackIcon
