import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import GeneralInformation376LineIconSvg from '../../assets/GSDD/GeneralInformation_376_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const GeneralInformation376LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <GeneralInformation376LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

GeneralInformation376LineIcon.Style = SvgIcon;
GeneralInformation376LineIcon.displayName = 'GeneralInformation376LineIcon';

export default GeneralInformation376LineIcon
