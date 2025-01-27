import { marked } from 'marked';
import { renderer } from './renderer';

export function markdownToPlain(markdown: string) {
  marked.use({ renderer });
  return marked.parse(markdown);
}
