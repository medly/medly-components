export const storyTemplate = (icons: { [k: string]: string[] }) => {
    const imports = Object.keys(icons)
        .map(DIR => icons[DIR].map(iconName => `import ${iconName} from './icons/${DIR}${iconName}';`).join('\n'))
        .join('\n');

    const iconComponents = (iconNames: string[]) =>
        iconNames
            .map(
                name =>
                    `<${name} 
                    size={select('Size', sizes, 'M')}
                    variant={select('Variant', variants, 'flat')}
                    disabled={boolean('Disabled', false)}
                    withHoverEffect={boolean('With hover efect', false)}
                    iconColor={color('Icon Color', defaultTheme.icon.colors.default.iconColor)}
                    bgColor={color('Background Color', defaultTheme.icon.colors.default.bgColor)}
                    hoverIconColor={color('Hover icon color', defaultTheme.icon.colors.hovered.iconColor)}
                    hoverBgColor={color('Hover background color', defaultTheme.icon.colors.hovered.bgColor)}
            />`
            )
            .join('\n            ');

    const preview = Object.keys(icons)
        .map(
            DIR => `
### ${DIR.slice(0, -1)}

<Preview withToolbar>
    <Story name="${DIR.slice(0, -1)}" decorators={[withKnobs]}>
        <IconGrid>
            ${iconComponents(icons[DIR])}
        </IconGrid>
    </Story>
</Preview>`
        )
        .join('\n');

    return `import { HTMLProps } from '@medly-components/utils';
import SvgIcon from './SvgIcon';
import { defaultTheme } from '@medly-components/theme';
import { Preview, Story, Meta, Props } from '@storybook/addon-docs/blocks';
import IconGrid from './IconGrid';
import { withKnobs, color, select, boolean } from '@storybook/addon-knobs';
import { sizes, variants, ThemeInterface, IconProps, Wrapper } from './Icons.stories';
${imports}

<Meta title="Icons" component={SvgIcon} />

# Icons

A collection of icons exported as React components (SVG icons).

### How to use

\`\`\`tsx
import { AddIcon } from '@medly-components/icons';

<AddIcon />;
\`\`\`

### Variants

There are two variants available for all the icons \`solid\` | \`flat\`.

-   \`solid\` variant will reserve the space around the icon to show the background color. Also you can use the \`withHoverEffect\` prop to show the hover effect also.
-   \`flat\` (default variant) will show the icon without the hover effect and space around it.

\`pointer\` cursor will only appear when you pass the \`onClick\` prop.

<Preview>
    <Wrapper>
        <CalendarTodayIcon
            variant="solid"
            withHoverEffect
            hoverIconColor={defaultTheme.icon.colors.hovered.iconColor}
            hoverBgColor={defaultTheme.icon.colors.hovered.bgColor}
            iconColor={defaultTheme.icon.colors.default.iconColor}
            bgColor={defaultTheme.icon.colors.default.bgColor}
        />
        <CalendarTodayIcon variant="flat" />
        <span>Solid</span>
        <span>Flat</span>
    </Wrapper>
</Preview>

### Props

None of the props is required but still you can style all the icons according to your requirement using below props.

<Props of={IconProps} />

### Theme

<Props of={ThemeInterface} />
${preview}
`;
};
