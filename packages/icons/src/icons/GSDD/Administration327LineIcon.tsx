import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Administration327LineIconSvg from '../../assets/GSDD/Administration_327_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Administration327LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Administration327LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Administration327LineIcon.Style = SvgIcon;
Administration327LineIcon.displayName = 'Administration327LineIcon';

export default Administration327LineIcon
