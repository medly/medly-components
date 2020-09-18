import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Administration301LineIconSvg from '../../assets/GSDD/Administration_301_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Administration301LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Administration301LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Administration301LineIcon.Style = SvgIcon;
Administration301LineIcon.displayName = 'Administration301LineIcon';

export default Administration301LineIcon
