export const exportTemplate = (icons: { [k: string]: string[] }) => {
    const exports = Object.keys(icons)
        .map(DIR => icons[DIR].map(iconName => `export { default as ${iconName} } from './icons/${DIR}${iconName}';`).join('\n'))
        .join('\n');

    return `${exports}
export { default as SvgIcon } from './SvgIcon';
export * from './types';
`;
};
