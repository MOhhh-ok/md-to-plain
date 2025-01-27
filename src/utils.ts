export function calculateTextWidth(text: string) {
  let width = 0;

  // 各文字をループして幅を加算
  for (let i = 0; i < text.length; i++) {
    const char = text.charAt(i);

    // 日本語（漢字、ひらがな、カタカナ）は幅2
    if (/\p{Script=Han}|\p{Script=Hiragana}|\p{Script=Katakana}/u.test(char)) {
      width += 2;
    } else {
      width += 1;
    }
  }

  return width;
}
