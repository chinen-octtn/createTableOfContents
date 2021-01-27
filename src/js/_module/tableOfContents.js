export function tableOfContents() {
  const targetId = 'tableOfContents'; // 目次を表示させる枠となるdivのid
  const entryId = 'entry'; // 見出しを取得するdivのid
  const listId = 'indexList'; // 目次ol要素につけるid

  // targetが無ければ何もしない
  const target = document.querySelector('#'+ targetId);
  if(!target) return;

  // ol要素を追加
  target.insertAdjacentHTML('beforeend', '<ol id="' + listId + '"></ol>');

  // h2, h3を取得する
  const list = document.querySelector('#' + listId);
  const entry = document.querySelector('#' + entryId);
  const nodeList = entry.querySelectorAll('h2, h3');
  // for IE
  const arr = Array.prototype.slice.call(nodeList);

  // 見出しレベルがh2ならtrue、h3にネストしているならfalse
  let topLevel = true;
  let html = '';

  // 見出しごとにループする
  arr.forEach((elm, index) => {

    // 見出しにidを付与する
    const titleId = 'title' + index;
    elm.setAttribute('id', titleId);

    // 目次の要素を作成
    const linkElm = '<a href="#' + titleId + '">' + elm.innerText + '</a>';

    // h2なら0、h3なら1で分岐する
    const level = elm.nodeName === 'H2' ? 0: 1;
    let startTag = '';
    let lastTag = '';

    // h2
    if(level === 0) {
      // 直前がh2かどうか
      startTag = topLevel ? '</li><li>' : '</li></ol></li><li>';
      // 見出しレベルを戻す
      topLevel = true;
    }

    // h3
    if(level === 1) {
      // 直前がh2かどうか
      startTag = topLevel ? '<ol><li>' : '</li><li>';
      // 見出しレベルをネストする
      topLevel = false;
    }

    // 最初の要素の開始タグ
    if(index === 0) {
      startTag = '<li>';
    }

    // 最後の要素の終了タグ
    if(index === arr.length - 1) {
      lastTag =  level === 0 ? '</li>' : '</li></ol></li>';
    }

    // 条件に応じたHTMLを結合
    const listElm = startTag + linkElm + lastTag;
    // 変数に追加
    html += listElm;
  });

  // 目次のHTMLを表示させる
  list.insertAdjacentHTML('beforeend', html);
}
