import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Administration408LineIconSvg from '../../assets/GSDD/Administration_408_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Administration408LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Administration408LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Administration408LineIcon.Style = SvgIcon;
Administration408LineIcon.displayName = 'Administration408LineIcon';

export default Administration408LineIcon
