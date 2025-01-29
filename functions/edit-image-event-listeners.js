function addEditImageEventListeners() {
  const editableImage = document.querySelector(".editable-product-image");
  const imageChangeButton = document.querySelector(
    ".editable-product-image-change"
  );

  imageChangeButton.addEventListener("change", () => {
    const reader = new FileReader();
    const file = imageChangeButton.files[0];

    reader.addEventListener("load", () => {
      editableImage.src = reader.result;
    });

    reader.readAsDataURL(file);
  });
}

export { addEditImageEventListeners };
