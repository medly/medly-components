import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Administration389LineIconSvg from '../../assets/GSDD/Administration_389_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Administration389LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Administration389LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Administration389LineIcon.Style = SvgIcon;
Administration389LineIcon.displayName = 'Administration389LineIcon';

export default Administration389LineIcon
