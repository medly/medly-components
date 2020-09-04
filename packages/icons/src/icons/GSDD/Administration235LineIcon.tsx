import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Administration235LineIconSvg from '../../assets/GSDD/Administration_235_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Administration235LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Administration235LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Administration235LineIcon.Style = SvgIcon;
Administration235LineIcon.displayName = 'Administration235LineIcon';

export default Administration235LineIcon
