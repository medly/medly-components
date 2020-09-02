import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Administration334LineIconSvg from '../../assets/GSDD/Administration_334_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Administration334LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Administration334LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Administration334LineIcon.Style = SvgIcon;
Administration334LineIcon.displayName = 'Administration334LineIcon';

export default Administration334LineIcon
