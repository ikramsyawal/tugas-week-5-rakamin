function addRow(){
    const name = document.getElementById('namaInput').value
    const age = document.getElementById('usiaInput').value
    const money = document.getElementById('uangSangu').value
    let nomorUrut = 0

    if (document.getElementById('myForm').checkValidity()){
        const table = document.getElementById('table')
        const newRow = table.insertRow(-1)

        const cell0 = newRow.insertCell(0)
        const cell1 = newRow.insertCell(1)
        const cell2 = newRow.insertCell(2)
        const cell3 = newRow.insertCell(3)

        cell0.innerHTML = nomorUrut + 1
        cell1.innerHTML = name;
        cell2.innerHTML = age;
        cell3.innerHTML = money;

        document.getElementById('myForm').reset();
    } else{
        alert('Please fill in all required fields.')
    }
}