export const exportTemplate = (iconNames: string[]) => {
    const exports = iconNames.map(name => `export { default as ${name} } from './icons/${name}';`).join('\n');

    return `${exports}
export { default as SvgIcon } from './SvgIcon';
export { default as BurgerIcon } from './icons/BurgerIcon';
export * from './types';
`;
};
