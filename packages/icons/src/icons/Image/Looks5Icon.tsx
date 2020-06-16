import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Looks5IconSvg from '../../assets/Image/looks_5_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Looks5Icon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Looks5IconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Looks5Icon.Style = SvgIcon;
Looks5Icon.displayName = 'Looks5Icon';

export default Looks5Icon
