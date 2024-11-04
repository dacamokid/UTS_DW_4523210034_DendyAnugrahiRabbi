document.addEventListener("DOMContentLoaded", function () {
    // Ambil semua tombol daftar membership
    const membershipButtons = document.querySelectorAll(".membership-option .btn-primary");
  
    // Tambahkan event listener ke setiap tombol
    membershipButtons.forEach((button) => {
      button.addEventListener("click", function (event) {
        event.preventDefault();
  
        // Ambil nama paket membership yang dipilih
        const membershipName = button.parentElement.querySelector("h3").innerText;
  
        // Tampilkan form untuk mengisi data member
        showMembershipForm(membershipName);
      });
    });
  });
  
  // Fungsi untuk menampilkan form member
  function showMembershipForm(membershipName) {
    // Buat elemen pop-up form
    const formBox = document.createElement("div");
    formBox.classList.add("form-box");
    formBox.innerHTML = `
      <div class="form-content">
        <h3>Daftar untuk paket ${membershipName}</h3>
        <form id="membershipForm">
          <label for="name">Nama Lengkap:</label>
          <input type="text" id="name" name="name" required>
          
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required>
          
          <label for="phone">Nomor Telepon:</label>
          <input type="tel" id="phone" name="phone" required>
          
          <button type="submit" class="btn-confirm">Submit</button>
          <button type="button" class="btn-cancel">Batal</button>
        </form>
      </div>
    `;
  
    // Tambahkan form ke dalam body
    document.body.appendChild(formBox);
  
    // Event listener untuk submit form
    const membershipForm = document.getElementById("membershipForm");
    membershipForm.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
  
      alert(`Terima kasih, ${name}! Anda telah berhasil mendaftar untuk paket ${membershipName}. Kami akan menghubungi Anda di ${email}.`);
  
      closeForm(formBox);
    });
  
    // Event listener untuk tombol "Batal"
    const btnCancel = formBox.querySelector(".btn-cancel");
    btnCancel.addEventListener("click", function () {
      closeForm(formBox);
    });
  }
  
  // Fungsi untuk menutup form
  function closeForm(formBox) {
    formBox.remove();
  }
  