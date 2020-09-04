import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Administration401LineIconSvg from '../../assets/GSDD/Administration_401_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Administration401LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Administration401LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Administration401LineIcon.Style = SvgIcon;
Administration401LineIcon.displayName = 'Administration401LineIcon';

export default Administration401LineIcon
