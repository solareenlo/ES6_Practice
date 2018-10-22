const testingTeam = {
    lead: 'のりこ',
    tester: 'たかし'
};

const engineeringTeam = {
    testingTeam,
    size: 3,
    department: '開発部',
    lead: '太郎',
    manager: '花子',
    engineer: '二郎'
};

function* TeamIterator(team) {
    yield team.lead;
    yield team.manager;
    yield team.engineer;
    const testingTeamGenerator = TestingTeamIterator(team.testingTeam);
    yield* testingTeamGenerator;
}

function* TestingTeamIterator(team) {
    yield team.lead;
    yield team.tester;
}

let names = [];

for(let name of TeamIterator(engineeringTeam)) {
    names.push(name);
}

console.log(names);
