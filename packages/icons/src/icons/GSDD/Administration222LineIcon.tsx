import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Administration222LineIconSvg from '../../assets/GSDD/Administration_222_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Administration222LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Administration222LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Administration222LineIcon.Style = SvgIcon;
Administration222LineIcon.displayName = 'Administration222LineIcon';

export default Administration222LineIcon
