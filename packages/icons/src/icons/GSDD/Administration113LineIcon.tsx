import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Administration113LineIconSvg from '../../assets/GSDD/Administration_113_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Administration113LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Administration113LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Administration113LineIcon.Style = SvgIcon;
Administration113LineIcon.displayName = 'Administration113LineIcon';

export default Administration113LineIcon
