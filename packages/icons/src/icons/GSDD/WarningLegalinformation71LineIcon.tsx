import { WithStyle } from '@medly-components/utils';
import { memo, FC } from 'react';
import WarningLegalinformation71LineIconSvg from '../../assets/GSDD/Warning_Legalinformation_71_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <WarningLegalinformation71LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'WarningLegalinformation71LineIcon';

const WarningLegalinformation71LineIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default WarningLegalinformation71LineIcon;
