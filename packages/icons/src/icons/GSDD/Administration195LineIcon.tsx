import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Administration195LineIconSvg from '../../assets/GSDD/Administration_195_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Administration195LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Administration195LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Administration195LineIcon.Style = SvgIcon;
Administration195LineIcon.displayName = 'Administration195LineIcon';

export default Administration195LineIcon
