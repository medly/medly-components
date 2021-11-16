export const iconTemplate = (iconName: string, assetPath: string) => `import { WithStyle } from '@medly-components/utils';
import type { FC } from 'react';
import { memo } from 'react';
import ${iconName}Svg from '${assetPath}';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <${iconName}Svg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = '${iconName}';

const ${iconName}: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default ${iconName};
`;
