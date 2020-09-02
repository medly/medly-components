import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Administration115LineIconSvg from '../../assets/GSDD/Administration_115_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Administration115LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Administration115LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Administration115LineIcon.Style = SvgIcon;
Administration115LineIcon.displayName = 'Administration115LineIcon';

export default Administration115LineIcon
