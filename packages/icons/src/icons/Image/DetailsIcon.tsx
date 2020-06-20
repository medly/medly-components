import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import DetailsIconSvg from '../../assets/Image/details_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DetailsIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <DetailsIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

DetailsIcon.Style = SvgIcon;
DetailsIcon.displayName = 'DetailsIcon';

export default DetailsIcon
