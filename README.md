# CMSの本文から目次を自動生成するJS

[`src/js/_module/tableOfContents.js`](https://github.com/chinen-octtn/createTableOfContents/blob/master/src/js/_module/tableOfContents.js)

h2とh3を取得してリストを生成し、アンカーリンクを設定する

以下、設定に必要な項目

```
- html -

// 任意のidでOK、JSファイルの変数と揃えておく
<div id="tableOfContents"></div>

```

```
- tableOfContents.js -

const targetId = 'tableOfContents'; // 目次を表示させる枠となるdivのid
const entryId = 'entry'; // 見出しを取得するdivのid
const heading = 'h2, h3'; // 対象にするhタグをカンマ区切りで指定する
```

[Sample](https://chinen-octtn.github.io/createTableOfContents/)

## 動作確認環境
node v12.16.3
npm v6.14.4

## ローカル開発環境の起動

初回のみ
```
npm i
```

```
npm start
```

2回目以降

```
npm start
```

