document.getElementById("productForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Ngăn reload trang

    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let imageInput = document.getElementById("image");
    let image = URL.createObjectURL(imageInput.files[0]); // Lấy ảnh từ input

    let productList = document.getElementById("productList");
    let productItem = document.createElement("div");

    productItem.innerHTML = `
        <h3>${name}</h3>
        <p>Giá: ${price} VNĐ</p>
        <img src="${image}" width="150">
        <hr>
    `;

    productList.appendChild(productItem);

    // Xóa dữ liệu trong form sau khi đăng
    document.getElementById("productForm").reset();
});
