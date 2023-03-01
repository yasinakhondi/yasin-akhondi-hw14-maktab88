function renderTable() {
  $.ajax({
    type: "GET",
    url: "/product/get-all-products",
    success(data) {
      const productData = data;
      table.innerHTML = `<tr>
          <th scope="col">No</th>
          <th id="id" scope="col">ID</th>
          <th id="name" scope="col">Title</th>
          <th id="date" scope="col">Price</th>
          <th id="date" scope="col">Rating</th>
          <th id="date" scope="col">Stock</th>
          <th id="date" scope="col">Brand</th>
          <th id="date" scope="col">Category</th>
        </tr>`;
      //create rows
      productData.forEach((product, indexOfProduct) => {
        table.insertRow();
        let newCell = table.rows[table.rows.length - 1].insertCell();
        newCell.textContent = indexOfProduct + 1;
        for (const key in product) {
          let newCell = table.rows[table.rows.length - 1].insertCell();
          newCell.textContent = product[key];
        }
      });
    },
    error(err) {
      console.log(err);
    },
  });
}
$(() => {
  renderTable();
});
