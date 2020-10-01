import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Administration395LineIconSvg from '../../assets/GSDD/Administration_395_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Administration395LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Administration395LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Administration395LineIcon.Style = SvgIcon;
Administration395LineIcon.displayName = 'Administration395LineIcon';

export default Administration395LineIcon
