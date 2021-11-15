/* eslint-disable react/display-name */
import { LegacyRef, memo } from 'react';
import { CodeComponent } from 'react-markdown/lib/ast-to-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import tomorrow from './tomorrow';

export const CodeBlock: CodeComponent = memo(props => {
    const { inline, className, children, ref, ...restProps } = props,
        match = /language-(\w+)/.exec(className || '');

    return !inline && match ? (
        <SyntaxHighlighter style={tomorrow} language={match[1]} ref={ref as LegacyRef<SyntaxHighlighter>} {...restProps}>
            {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
    ) : (
        <code className={className} {...restProps}>
            {children}
        </code>
    );
});
