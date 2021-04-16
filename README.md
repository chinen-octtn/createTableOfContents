# CMSの本文から目次を自動生成するJS

CMSで出力したHTMLの中からh2等の見出しを取得して目次リストを自動生成する。
各見出しにアンカーリンクを設定する。

[Sample](https://chinen-octtn.github.io/createTableOfContents/)


[`src/js/_module/tableOfContents.js`](https://github.com/chinen-octtn/createTableOfContents/blob/master/src/js/_module/tableOfContents.js)

h2とh3を取得してリストを生成し、アンカーリンクを設定する

以下、設定に必要な項目

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

* Chrome
* Safari
* Firefox
* Edge



# JSカスタマイズの開発環境
## 動作環境
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

