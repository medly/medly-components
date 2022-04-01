import { WithStyle } from '@medly-components/utils';
import type { FC } from 'react';
import { memo } from 'react';
import DrugsIconSvg from '../../assets/Custom/drugs_24px.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = memo(props => {
    const {
        size,
        withHoverEffect,
        color,
        margin,
        iconColor: $iconColor,
        bgColor: $bgColor,
        hoverIconColor: $hoverIconColor,
        hoverBgColor: $hoverBgColor,
        ...restProps
    } = props;
    return (
        <SvgIcon
            {...{
                size,
                withHoverEffect,
                color,
                margin,
                $iconColor,
                $bgColor,
                $hoverIconColor,
                $hoverBgColor,
                ...restProps
            }}
        >
            <DrugsIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'DrugsIcon';

const DrugsIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default DrugsIcon;
