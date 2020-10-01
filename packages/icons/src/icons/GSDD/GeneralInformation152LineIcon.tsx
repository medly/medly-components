import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import GeneralInformation152LineIconSvg from '../../assets/GSDD/GeneralInformation_152_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const GeneralInformation152LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <GeneralInformation152LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

GeneralInformation152LineIcon.Style = SvgIcon;
GeneralInformation152LineIcon.displayName = 'GeneralInformation152LineIcon';

export default GeneralInformation152LineIcon
