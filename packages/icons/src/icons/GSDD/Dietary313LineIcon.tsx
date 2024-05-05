import { WithStyle } from '@medly-components/utils';
import type { FCC } from 'react';
import { memo } from 'react';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';
import Dietary313LineIconSvg from '../../assets/GSDD/Dietary_313_Line.svg';

const Component: FCC<SvgIconProps> = memo(props => {
    const { size, variant, iconColor, bgColor, hoverBgColor, hoverIconColor, withHoverEffect, margin, fillOpacity, ...restProps } = props;
    return (
        <SvgIcon
            {...{ size, variant, iconColor, bgColor, hoverBgColor, hoverIconColor, withHoverEffect, margin, fillOpacity, ...restProps }}
        >
            <Dietary313LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'Dietary313LineIcon';

const Dietary313LineIcon: FCC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default Dietary313LineIcon;
