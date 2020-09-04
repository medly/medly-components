import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Administration169LineIconSvg from '../../assets/GSDD/Administration_169_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Administration169LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Administration169LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Administration169LineIcon.Style = SvgIcon;
Administration169LineIcon.displayName = 'Administration169LineIcon';

export default Administration169LineIcon
