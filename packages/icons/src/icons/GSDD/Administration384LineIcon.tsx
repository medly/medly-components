import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Administration384LineIconSvg from '../../assets/GSDD/Administration_384_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Administration384LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Administration384LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Administration384LineIcon.Style = SvgIcon;
Administration384LineIcon.displayName = 'Administration384LineIcon';

export default Administration384LineIcon
