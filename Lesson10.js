let people = [
    {
        name: 'Malika',
        budget: 20000,
        rent: 12,
        expenses: [
            {
                total: 2000,
                title: 'sousages'
            },
            {
                total: 1200,
                title: 'mobile phone'
            },
            {
                total: 3000,
                title: 'car'
            },
        ]
    },
    {
        name: 'Diyor from 611 gr',
        budget: 20000,
        rent: 12,
        expenses: [{
                total: 1500,
                title: 'sousages'
            },
            {
                total: 2200,
                title: 'sousages width ketchup'
            },
            {
                total: 3500,
                title: 'sousages'
            },
        ]
    },
    {
        name: 'Aziz',
        budget: 20200,
        rent: 12,
        expenses: [{
                total: 100,
                title: 'girls'
            },
            {
                total: 4200,
                title: 'girls'
            },
            {
                total: 300,
                title: 'girls'
            },
        ]
    },
    {
        name: 'Amir',
        budget: 27000,
        rent: 12,
        expenses: [{
                total: 2000,
                title: 'study'
            },
            {
                total: 1000,
                title: 'games'
            },
            {
                total: 5000,
                title: 'clothes'
            },
        ]
    },
    {
        name: 'Maxmudbek',
        budget: 15000,
        rent: 12,
        expenses: [{
                total: 1111,
                title: 'sigarets'
            },
            {
                total: 1900,
                title: 'chilim'
            },
            {
                total: 6000,
                title: 'anasha'
            },
        ]
    },
    {
        name: 'Samir',
        budget: 12000,
        rent: 12,
        expenses: [{
                total: 1200,
                title: 'food'
            },
            {
                total: 990,
                title: 'car'
            },
            {
                total: 7000,
                title: 'protain'
            },
        ]
    },
    {
        name: 'Badriddin',
        budget: 2000,
        rent: 12,
        expenses: [{
                total: 1000,
                title: 'taxi'
            },
            {
                total: 8000,
                title: 'rich girls'
            },
            {
                total: 700,
                title: 'on himself'
            },
        ]
    }
]





for(let item of people){
    for(let money of item.expenses){
    document.write(`
    <div style="background-color:red; width : 400px; height : 250px; margin-bottom: 10px">
    <strong>Name</strong>:${item.name} <br>
    <strong>В балансе было</strong>:${item.budget} <br>
    <strong>Арендная плата</strong>:${item.rent}% <br>
    <strong>Баланс после вычесления аренды</strong>:${item.budget - (item.budget * item.rent / 100)} <br>
    <strong>Другие расходы</strong>:
    <ul>
       <li>${money.total} на ${money.title}</li>
       <li>${money.total} на ${money.title}</li>
       <li>${money.total} на ${money.title}</li>
    </ul>
    <strong>Всего дополнительных затрат</strong>:${money.total*3}<br>
    <strong>Осталось денег на счету</strong>:${(item.budget - (item.budget * item.rent / 100)) - money.total*3}

    </div>
`)
    }

}


