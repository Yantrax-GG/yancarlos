/**
 * User Interface Class
 */
export class UI {
  /**
   * Add a New Product 
   * @param {Object} product A new product Object
   */
  addProduct(product) {
    const productList = document.getElementById("product-list");
    const element = document.createElement("div");
    element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>motocicleta</strong>: ${product.name} -
                    <strong>precio</strong>: ${product.price} - 
                    <strong>modelo</strong>: ${product.year}
                    <a href="#" class="btn btn-danger" name="borrar">borrar</a>
                </div>
            </div>
        `;
    productList.appendChild(element);
  }

  /**
   * Reset Form Values
   */
  resetForm() {
    document.getElementById("product-form").reset();
  }

  Product(element) {
    if (element.name === "borrar") {
      element.parentElement.parentElement.remove();
      this.showMessage("producto agotado", "danger");
    }
  }

  showMessage(message, cssClass) {
    const div = document.createElement("div");
    div.className = `alert alert-${cssClass} mt-2`;
    div.appendChild(document.createTextNode(message));

    // Show in The DOM
    const container = document.querySelector(".container");
    const app = document.querySelector("#App");

    // Insert Message in the UI
    container.insertBefore(div, app);

    // Remove the Message after 3 seconds
    setTimeout(function () {
      document.querySelector(".alert").remove();
    }, 3000);
  }
}

