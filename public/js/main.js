/**
 * clock and datetime
 */

function dateTimeElement() {
  const dateElements = document.getElementsByClassName('ss_date');
  const currentDate = new Date();

  // clock
  let hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();
  let amOrPm = "";

  // date
  function getMonthName(monthIndex) {
    const monthNames = [
      "Januari", "Februari", "Maret", "April", "Mei", "Juni",
      "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];

    return monthNames[monthIndex];
  }

  let days = currentDate.getDay();
  let monthIndex = currentDate.getMonth();
  let months = getMonthName(monthIndex);
  let date = currentDate.getDate();
  let years = currentDate.getFullYear();
  let weekdays = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  
  // Format tanggal
  const formattedDate = `<span>${weekdays[days]}, ${date} ${months} ${years}</span>`;
  
  // Memperbarui elemen tanggal
  for (let i = 0; i < dateElements.length; i++) {
    let dateElement = dateElements[i];
    dateElement.innerHTML = formattedDate;
  }
}

// Memanggil fungsi dateTimeElement saat halaman selesai dimuat
document.addEventListener("DOMContentLoaded", dateTimeElement);

setInterval(dateTimeElement, 1000)


function clockAnalog() {
  const deg = 6;
  const hr = document.querySelector("#ss_hr");
  const mn = document.querySelector("#ss_mn");
  const sc = document.querySelector("#ss_sc");
  
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg;

  hr.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;
}
setInterval(clockAnalog, 1000)

/**
 * 
 * Icon Animation
 * 
 */
