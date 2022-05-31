const kibria = {
    money: 5000,
    name: 'RJ Kibria',
    treatDey: function (expense) {
        this.money = this.money - expense;
        console.log('here5555', this);
        return this.money;
    }
}

const heroBalam = {
    money: 6000,
    name: 'Hero Balam'
}


const normalGolam = {
    money: 8000,
    name: 'Normal Golam'
}

kibria.treatDey(100);

const heroTreatDey = kibria.treatDey.bind(heroBalam);
heroTreatDey(500);
heroTreatDey(200);

kibria.treatDey(200);

const normalTreatDey = kibria.treatDey.bind(normalGolam);
normalTreatDey(2000);
normalTreatDey(1000);
