import { WithStyle } from '@medly-components/utils';
import { memo, FC } from 'react';
import PictureAsPdfIconSvg from '../../assets/Image/picture_as_pdf_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PictureAsPdfIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'PictureAsPdfIcon';

const PictureAsPdfIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default PictureAsPdfIcon;
