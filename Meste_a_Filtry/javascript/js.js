document.getElementById('filter-mesto').addEventListener('input', function() {
    const filter = this.value.toLowerCase();
    const rows = document.querySelectorAll('#tabulka-body tr');
    rows.forEach(row => {
        const city = row.cells[1].textContent.toLowerCase();
        row.style.display = city.includes(filter) ? '' : 'none';
    });
});

const select = document.getElementById('vyber-mesto');
const originalOptions = Array.from(select.options);
document.getElementById('filter-select').addEventListener('input', function() {
    const filter = this.value.toLowerCase();
    select.innerHTML = '';
    originalOptions.forEach(option => {
        if (option.value.toLowerCase().includes(filter)) {
            select.appendChild(option.cloneNode(true));
        }
    });
});

document.getElementById('vyber-formular').addEventListener('submit', function(e) {
    e.preventDefault();
    const vybraneMesto = select.value;
    alert('Vybrali jste: ' + vybraneMesto);
    console.log('Vybrané město:', vybraneMesto);
});