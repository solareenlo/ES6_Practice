const team = {
    members: ['太郎', '花子'],
    teamName: 'スーパーチーム',
    teamSummary: function() {
        // this === team
        return this.members.map((menber) => {
            // lexical this
            // コールバック関数の中のthisは別のところのthisだったけど、
            // ES6からアロー関数を用いるとここのthisとして認識してくれる。
            return `${menber}は${this.teamName}の所属です。`;
        });
    }
};

console.log(team.teamSummary());
