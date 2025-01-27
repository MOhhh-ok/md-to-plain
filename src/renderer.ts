import { RendererObject } from 'marked';
import { calculateTextWidth } from './utils';

export const renderer: RendererObject = {
  heading({ tokens, depth }) {
    const text = this.parser.parseInline(tokens);
    const margin = 1;
    const marginSpace = ' '.repeat(margin);

    if (depth == 1) {
      const marker = '='.repeat(calculateTextWidth(text) + margin * 2);
      return `${marker}\n${marginSpace}${text}\n${marker}\n\n`;
    } else {
      const marker = '='.repeat(depth - 1);
      return `${marker} ${text} ${marker}\n\n`;
    }
  },
  paragraph({ tokens }) {
    const text = this.parser.parseInline(tokens);
    return `${text.trim()}\n\n`;
  },
  list({ items }) {
    const text = items.map((item) => `* ${item.text}`).join('\n');
    return `${text.trim()}\n\n`;
  },
};
