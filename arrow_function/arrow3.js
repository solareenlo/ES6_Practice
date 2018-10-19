const team = {
    members: ['太郎', '花子'],
    teamName: 'スーパーチーム',
    teamSummary: function() {
        // this === team
        return this.members.map((menber) => {
            // lexical this
            // コールバック関数の中のthisは別のところのthisだったけど、
            // ES6からアロー関数を用いると2個上のthisとして認識してくれる。
            // teamSummaryが1個上で、const teamが2個上
            return `${menber}は${this.teamName}の所属です。`;
        });
    }
};

console.log(team.teamSummary());
