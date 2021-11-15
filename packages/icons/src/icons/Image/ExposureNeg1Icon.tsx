import { WithStyle } from '@medly-components/utils';
import { memo, FC } from 'react';
import ExposureNeg1IconSvg from '../../assets/Image/exposure_neg_1_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ExposureNeg1IconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'ExposureNeg1Icon';

const ExposureNeg1Icon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default ExposureNeg1Icon;
