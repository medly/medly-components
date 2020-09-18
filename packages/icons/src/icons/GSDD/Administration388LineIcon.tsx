import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Administration388LineIconSvg from '../../assets/GSDD/Administration_388_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Administration388LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Administration388LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Administration388LineIcon.Style = SvgIcon;
Administration388LineIcon.displayName = 'Administration388LineIcon';

export default Administration388LineIcon
