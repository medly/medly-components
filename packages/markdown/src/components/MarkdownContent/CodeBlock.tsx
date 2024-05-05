/* eslint-disable react/display-name */
import type { FCC } from 'react';
import { LegacyRef, memo } from 'react';
import { CodeComponent } from 'react-markdown/lib/ast-to-react';
import type { SyntaxHighlighterProps } from 'react-syntax-highlighter';
import { Prism } from 'react-syntax-highlighter';
import tomorrow from './tomorrow';

const SyntaxHighlighter = Prism as unknown as FCC<SyntaxHighlighterProps>;

export const CodeBlock: CodeComponent = memo(props => {
    const { inline, className, children, ref, ...restProps } = props,
        match = /language-(\w+)/.exec(className || '');

    return !inline && match ? (
        <SyntaxHighlighter style={tomorrow} language={match[1]} ref={ref as LegacyRef<typeof SyntaxHighlighter>} {...restProps}>
            {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
    ) : (
        <code className={className} {...restProps}>
            {children}
        </code>
    );
});
