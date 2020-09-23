import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Administration387LineIconSvg from '../../assets/GSDD/Administration_387_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Administration387LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Administration387LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Administration387LineIcon.Style = SvgIcon;
Administration387LineIcon.displayName = 'Administration387LineIcon';

export default Administration387LineIcon
