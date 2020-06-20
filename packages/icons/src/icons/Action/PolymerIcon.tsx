import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import PolymerIconSvg from '../../assets/Action/polymer_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PolymerIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PolymerIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

PolymerIcon.Style = SvgIcon;
PolymerIcon.displayName = 'PolymerIcon';

export default PolymerIcon
