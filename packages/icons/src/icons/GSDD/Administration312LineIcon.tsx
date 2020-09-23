import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Administration312LineIconSvg from '../../assets/GSDD/Administration_312_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Administration312LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Administration312LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Administration312LineIcon.Style = SvgIcon;
Administration312LineIcon.displayName = 'Administration312LineIcon';

export default Administration312LineIcon
