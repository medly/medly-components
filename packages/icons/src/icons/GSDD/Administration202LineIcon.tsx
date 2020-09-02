import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Administration202LineIconSvg from '../../assets/GSDD/Administration_202_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Administration202LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Administration202LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Administration202LineIcon.Style = SvgIcon;
Administration202LineIcon.displayName = 'Administration202LineIcon';

export default Administration202LineIcon
