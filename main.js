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
        const age = parseInt(document.getElementById('usiaInput').value)
        const money = parseInt(document.getElementById('uangSangu').value)
        if (name.length >= 10 && age >= 25 && money >= 100000) {
            const newPeserta = new DataTable(name, age, money)
            listPeserta.push(newPeserta)
            isiTable()
        }else{
            alert('cek Nama, Usia, dan Uang Sangu anda apakah sudah memenuhi kriteria')
        }

    } else {
        alert('Please fill in all required fields.')
    }
}

function isiTable() {
    const table = document.getElementById('tableBody')
    const newRow = table.insertRow(-1)

    const cell0 = newRow.insertCell(0)
    const cell1 = newRow.insertCell(1)
    const cell2 = newRow.insertCell(2)
    const cell3 = newRow.insertCell(3)

    cell0.innerHTML = listPeserta.length
    cell1.innerHTML = listPeserta[listPeserta.length - 1].nama
    cell2.innerHTML = listPeserta[listPeserta.length - 1].usia
    cell3.innerHTML = listPeserta[listPeserta.length - 1].uang

    document.getElementById('ageAverage').innerHTML = ageAverage()
    document.getElementById('uangAverage').innerHTML = uangAverage()

    document.getElementById('myForm').reset();
}

const ageAverage = () => {
    let age = 0
    for (i = 0; i < listPeserta.length; i++) {
        age += parseInt(listPeserta[i].usia)
    }
    return age / listPeserta.length
}

const uangAverage = () => {
    let uang = 0
    for (i = 0; i < listPeserta.length; i++) {
        uang += parseInt(listPeserta[i].uang)
    }
    return uang / listPeserta.length
}