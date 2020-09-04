import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Administration188LineIconSvg from '../../assets/GSDD/Administration_188_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Administration188LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Administration188LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Administration188LineIcon.Style = SvgIcon;
Administration188LineIcon.displayName = 'Administration188LineIcon';

export default Administration188LineIcon
