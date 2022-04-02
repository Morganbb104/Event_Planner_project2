const modalForm = document.getElementById("modalForm");
const modalEmail = document.getElementById("modalEmail");
const modalOldPass = document.getElementById("modalOldPass");
const modalNewPass = document.getElementById("modalNewPass");
const modalFun = async (e) => {
  e.preventDefault();
  const modalData = {
    email: modalEmail.value.trim(),
    oldPassword: modalOldPass.value.trim(),
    newPassword: modalNewPass.value.trim(),
  };
  console.log(modalData);
  const fetchModalData = await fetch('api/user/update', {
    method: 'PUT',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(modalData),
  });
  const response = await fetchModalData.json().then((data) => {
    window.alert(data.message);
    modalEmail.value = "";
    modalNewPass.value = "";
    modalOldPass.value = "";
  });
};
modalForm.addEventListener("submit", modalFun);