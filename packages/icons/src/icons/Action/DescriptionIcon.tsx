import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import DescriptionIconSvg from '../../assets/Action/description_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DescriptionIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <DescriptionIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

DescriptionIcon.Style = SvgIcon;
DescriptionIcon.displayName = 'DescriptionIcon';

export default DescriptionIcon
