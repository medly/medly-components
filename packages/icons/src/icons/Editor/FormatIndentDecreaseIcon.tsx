import { WithStyle } from '@medly-components/utils';
import { memo, FC } from 'react';
import FormatIndentDecreaseIconSvg from '../../assets/Editor/format_indent_decrease_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <FormatIndentDecreaseIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'FormatIndentDecreaseIcon';

const FormatIndentDecreaseIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default FormatIndentDecreaseIcon;
