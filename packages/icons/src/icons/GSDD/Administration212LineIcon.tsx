import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Administration212LineIconSvg from '../../assets/GSDD/Administration_212_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Administration212LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Administration212LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Administration212LineIcon.Style = SvgIcon;
Administration212LineIcon.displayName = 'Administration212LineIcon';

export default Administration212LineIcon
