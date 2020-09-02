import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Administration190LineIconSvg from '../../assets/GSDD/Administration_190_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Administration190LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Administration190LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Administration190LineIcon.Style = SvgIcon;
Administration190LineIcon.displayName = 'Administration190LineIcon';

export default Administration190LineIcon
