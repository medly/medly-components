import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Administration403LineIconSvg from '../../assets/GSDD/Administration_403_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Administration403LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Administration403LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Administration403LineIcon.Style = SvgIcon;
Administration403LineIcon.displayName = 'Administration403LineIcon';

export default Administration403LineIcon
