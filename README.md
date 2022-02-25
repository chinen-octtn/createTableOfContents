# CMS の本文から目次を自動生成する JS

1. CMS で出力した HTML の中から h2 等の見出しを取得して目次リストを自動生成する。
2. 各見出しにアンカーリンクを設定する。

[Sample](https://chinen-octtn.github.io/createTableOfContents/)

下記 JS ファイルを bundle するか、export の中身を抜き出して直接 HTML の script タグで読み込んでも OK。

[`src/js/_module/tableOfContents.js`](https://github.com/chinen-octtn/createTableOfContents/blob/master/src/js/_module/tableOfContents.js)

or

`<script src="PATH/script.js" defer></script>`

## 設定に必要な項目

```
- html -

// 任意のidでOK、JSファイルの変数と揃えておく。この中に目次が出る
<div id="tableOfContents"></div>

<div id="entry">
  ~~ ここにCMSで登録したHTMLが表示される ~~
</div>
```

```
- tableOfContents.js -

const targetId = 'tableOfContents'; // 目次を表示させる枠となるdivのid
const entryId = 'entry'; // 見出しを取得するdivのid
const heading = 'h2, h3'; // 対象にするhタグをカンマ区切りで指定する
```

## 動作環境

- Chrome
- Safari
- Firefox
- Edge

## JS カスタマイズの開発環境

このリポジトリを clone する

### 動作環境

- macOS Big Sur 11.6.2
- node v16.13.0
- npm v8.1.0

### ローカル開発環境の起動

初回のみ

```
npm i
```

```
npm start
```

2 回目以降

```
npm start
```
