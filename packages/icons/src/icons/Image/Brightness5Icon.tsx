import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import Brightness5IconSvg from '../../assets/Image/brightness_5_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Brightness5Icon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Brightness5IconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Brightness5Icon.Style = SvgIcon;
Brightness5Icon.displayName = 'Brightness5Icon';

export default Brightness5Icon
