function deleteByEmail() {


  let value = document.querySelector('input[name="email"]').value;

  let rows = Array.from(document.querySelectorAll('tbody tr'))
  for (let row of rows) {
    if (row.children[1].textContent == value) {

      let parent = row.parentElement;
      parent.removeChild(row)
      document.getElementById('result').textContent = 'Deleted.';
    } else {
      document.getElementById('result').textContent = 'Not found.'
    }
  }
}

