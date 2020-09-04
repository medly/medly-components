import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Administration272LineIconSvg from '../../assets/GSDD/Administration_272_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Administration272LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Administration272LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Administration272LineIcon.Style = SvgIcon;
Administration272LineIcon.displayName = 'Administration272LineIcon';

export default Administration272LineIcon
