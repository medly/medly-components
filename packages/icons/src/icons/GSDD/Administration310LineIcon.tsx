import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Administration310LineIconSvg from '../../assets/GSDD/Administration_310_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Administration310LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Administration310LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Administration310LineIcon.Style = SvgIcon;
Administration310LineIcon.displayName = 'Administration310LineIcon';

export default Administration310LineIcon
