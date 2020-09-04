import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Administration203LineIconSvg from '../../assets/GSDD/Administration_203_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Administration203LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Administration203LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Administration203LineIcon.Style = SvgIcon;
Administration203LineIcon.displayName = 'Administration203LineIcon';

export default Administration203LineIcon
