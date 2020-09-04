import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import GeneralInformation120LineIconSvg from '../../assets/GSDD/GeneralInformation_120_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const GeneralInformation120LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <GeneralInformation120LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

GeneralInformation120LineIcon.Style = SvgIcon;
GeneralInformation120LineIcon.displayName = 'GeneralInformation120LineIcon';

export default GeneralInformation120LineIcon
