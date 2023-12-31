/* Letzte Speicherung */

function displayLastUpdated() {
    var lastUpdated = document.lastModified;
    var outputElement = document.getElementById("last-updated");

    if (outputElement) {
        outputElement.textContent = "Letzte Speicherung: " + lastUpdated;
    }
}

/* Suchfunktion */
function searchTable() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1]; /* Sucht nur in der zweiten collumn (nur Begriff) */
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}