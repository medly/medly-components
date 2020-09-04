import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Administration411LineIconSvg from '../../assets/GSDD/Administration_411_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Administration411LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Administration411LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Administration411LineIcon.Style = SvgIcon;
Administration411LineIcon.displayName = 'Administration411LineIcon';

export default Administration411LineIcon
