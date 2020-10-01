import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Administration170LineIconSvg from '../../assets/GSDD/Administration_170_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Administration170LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Administration170LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Administration170LineIcon.Style = SvgIcon;
Administration170LineIcon.displayName = 'Administration170LineIcon';

export default Administration170LineIcon
