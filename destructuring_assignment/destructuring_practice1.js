// 2次元配列の情報を、mapと分割代入を使って、
// オブジェクトの配列に変換
const classes = [
  [ '化学', '1時限目', '鈴木先生' ],
  [ '物理', '2時限目', '佐藤先生'],
  [ '数学', '3時限目', '木村先生' ]
];

const classesAsObject = classes.map(([subject, time, teacher]) => {
    return {subject, time, teacher};
});

console.log(classesAsObject);
