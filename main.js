class DataTable {
    constructor(nama, usia, uang) {
        this.nama = nama
        this.usia = usia
        this.uang = uang
    }
}

const listPeserta = []

function submitData() {
    if (document.getElementById('myForm').checkValidity()) {
        const name = document.getElementById('namaInput').value
        const age = document.getElementById('usiaInput').value
        const money = document.getElementById('uangSangu').value
        const newPeserta = new DataTable(name, age, money)
        listPeserta.push(newPeserta)
        isiTable()
    } else {
        alert('Please fill in all required fields.')
    }
}

function isiTable() {
    const table = document.getElementById('table')
    const newRow = table.insertRow(-1)

    const cell0 = newRow.insertCell(0)
    const cell1 = newRow.insertCell(1)
    const cell2 = newRow.insertCell(2)
    const cell3 = newRow.insertCell(3)

    cell0.innerHTML = listPeserta.length
    cell1.innerHTML = listPeserta[listPeserta.length - 1].nama
    cell2.innerHTML = listPeserta[listPeserta.length - 1].usia
    cell3.innerHTML = listPeserta[listPeserta.length - 1].uang

    document.getElementById('myForm').reset();
}