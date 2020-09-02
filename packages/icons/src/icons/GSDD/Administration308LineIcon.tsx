import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Administration308LineIconSvg from '../../assets/GSDD/Administration_308_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Administration308LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Administration308LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Administration308LineIcon.Style = SvgIcon;
Administration308LineIcon.displayName = 'Administration308LineIcon';

export default Administration308LineIcon
