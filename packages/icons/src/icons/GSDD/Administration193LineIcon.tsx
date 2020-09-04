import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Administration193LineIconSvg from '../../assets/GSDD/Administration_193_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Administration193LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Administration193LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Administration193LineIcon.Style = SvgIcon;
Administration193LineIcon.displayName = 'Administration193LineIcon';

export default Administration193LineIcon
