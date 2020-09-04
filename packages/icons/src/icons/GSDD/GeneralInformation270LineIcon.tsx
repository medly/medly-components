import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import GeneralInformation270LineIconSvg from '../../assets/GSDD/GeneralInformation_270_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const GeneralInformation270LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <GeneralInformation270LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

GeneralInformation270LineIcon.Style = SvgIcon;
GeneralInformation270LineIcon.displayName = 'GeneralInformation270LineIcon';

export default GeneralInformation270LineIcon
