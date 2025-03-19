const employees = [
    {
        id: 1,
        name: 'huy',
        age: 18,
        address: 'ha nam',
    },
    {
        id: 2,
        name: 'tien',
        age: 18,
        address: 'bac bling',
    }
]

const table = document.querySelector('tbody');

for(let i = 0; i < employees.length; i++){
    let row = document.createElement('tr');
    table.appendChild(row);
    for (const key in employees[i]) {
        let col = document.createElement('td');
        row.appendChild(col);
        col.innerText = employees[i][key];
    }
}