const testingTeam = {
    lead: 'のりこ',
    tester: 'たかし',
    [Symbol.iterator]: function* () {
        yield this.lead;
        yield this.tester;
    }
};

const engineeringTeam = {
    testingTeam,
    size: 3,
    department: '開発部',
    lead: '太郎',
    manager: '花子',
    engineer: '二郎',
    [Symbol.iterator]: function* () {
        yield this.lead;
        yield this.manager;
        yield this.engineer;
        yield* this.testingTeam;
    }
};

let names = [];
for(let name of engineeringTeam) {
    names.push(name);
}
console.log(names);
