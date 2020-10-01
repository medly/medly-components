import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Administration211LineIconSvg from '../../assets/GSDD/Administration_211_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Administration211LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Administration211LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Administration211LineIcon.Style = SvgIcon;
Administration211LineIcon.displayName = 'Administration211LineIcon';

export default Administration211LineIcon
