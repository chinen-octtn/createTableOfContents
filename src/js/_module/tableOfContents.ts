export function tableOfContents() {
  const targetId = 'tableOfContents' // 目次を表示させる枠となるdivのid
  const entryId = 'entry' // 見出しを取得するdivのid
  const heading = 'h2, h3' // 対象にするhタグをカンマ区切りで指定する

  // targetが無ければ何もしない
  const target = document.querySelector('#' + targetId)
  if (!target) return

  // 見出しを取得する
  const entry = document.querySelector('#' + entryId)
  const nodeList = entry?.querySelectorAll(heading)
  // for IE
  const arr = Array.prototype.slice.call(nodeList)

  // 基準となるレベル（見出しレベルと比較して処理する）
  let baseLevel = 2

  // 目次HTMLを格納する
  let html = ''

  // 見出しごとに処理する
  arr.forEach((elm, index) => {
    // 見出しにidを付与する
    const titleId = 'title' + index
    elm.setAttribute('id', titleId)

    // 目次の項目となる要素を作成
    const linkElm = '<a href="#' + titleId + '">' + elm.innerText + '</a>'

    // 見出しレベル H2なら2、H3なら3
    const headingNode = elm.nodeName.toLowerCase()
    const level = Number(headingNode.split('h')[1])

    // 目次の項目を挟むタグを格納する
    let startTag = ''
    let lastTag = ''

    if (level === baseLevel) {
      // 見出しレベルが同じ場合、liを続ける
      startTag = '</li><li>'
    } else if (level >= baseLevel) {
      // 見出しレベルがネストした場合、olを入れ子にしてベースレベルもネストする
      startTag = '<ol><li>'
      baseLevel++
    } else {
      // 見出しレベルが上がった場合、olを閉じてベースレベルを戻す
      let closeTag = ''
      for (let i = level; i < baseLevel; i++) {
        closeTag += '</li></ol>'
      }
      startTag = closeTag + '</li><li>'
      const count = Number(level - baseLevel)
      baseLevel += count
    }

    // 最初の要素の開始タグ
    if (index === 0) {
      startTag = '<li>'
    }

    // 最後の要素の終了タグ
    if (index === arr.length - 1) {
      let closeTag = ''
      for (let i = 2; i < baseLevel; i++) {
        closeTag += '</li></ol>'
      }
      lastTag = level === 2 ? '</li>' : closeTag + '</li>'
    }

    // 条件に応じたHTMLを結合
    const listElm = startTag + linkElm + lastTag
    // 変数に追加
    html += listElm
  })

  // 目次のHTMLを表示させる
  target.insertAdjacentHTML('beforeend', '<ol>' + html + '</ol>')
}
