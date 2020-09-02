import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import GeneralInformation249LineIconSvg from '../../assets/GSDD/GeneralInformation_249_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const GeneralInformation249LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <GeneralInformation249LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

GeneralInformation249LineIcon.Style = SvgIcon;
GeneralInformation249LineIcon.displayName = 'GeneralInformation249LineIcon';

export default GeneralInformation249LineIcon
