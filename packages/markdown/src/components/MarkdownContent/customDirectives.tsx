import { visit } from 'unist-util-visit';

const customDirectives = () => {
    const onDirective = (node: any) => {
        const { name, attributes, children } = node;
        const text = children[0]?.value ?? '';

        const data = node.data || (node.data = {});
        data.hName = name;
        data.hProperties = { ...attributes, text };
    };
    const transform = (tree: any) => visit(tree, 'textDirective', onDirective);

    return transform;
};

export default customDirectives;
