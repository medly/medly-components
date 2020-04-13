export const exportTemplate = (DIR: string, iconNames: string[]) => {
    const exports = iconNames.map(name => `export { default as ${name} } from './icons/${DIR}${name}';`).join('\n');

    return `${exports}
export { default as SvgIcon } from './SvgIcon';
export * from './types';
`;
};
