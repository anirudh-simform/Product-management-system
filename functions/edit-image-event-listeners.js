function addEditImageEventListeners() {
  const editableImage = document.querySelector(".editable-product-image");
  const imageChangeButton = document.querySelector(
    ".editable-product-image-change"
  );

  // 5MB constant
  const maxFileSize = 5000000;
  imageChangeButton.addEventListener("change", () => {
    const reader = new FileReader();
    const file = imageChangeButton.files[0];

    // Validating image size
    if (file.size > maxFileSize) {
      alert(
        "The uploaded file exceeds the maximum allowed capacity of 5MB. Please choose a smaller file"
      );
      return;
    }

    reader.addEventListener("load", () => {
      editableImage.src = reader.result;
    });

    reader.readAsDataURL(file);
  });
}

export { addEditImageEventListeners };
