// Visitor Flag Logic
const flagEl = document.getElementById('visitorFlag');
const flagImg = document.getElementById('flagImg');
const countryName = document.getElementById('countryName');

if (flagEl) {
  fetch('https://ipapi.co/json/', { signal: AbortSignal.timeout(4000) })
    .then(r => r.json())
    .then(data => {
      if(data.country_code) {
        flagImg.src = `https://flagcdn.com/w40/${data.country_code.toLowerCase()}.png`;
        flagImg.style.opacity = '1'; // إظهار العلم بوضوح
        countryName.textContent = data.country_name;
      }
    })
    .catch(() => {
      // في حالة الفشل، نظهر اسم الدولة كـ "Unknown" أو نخفي العلم فقط
      flagImg.style.display = 'none';
      countryName.textContent = "Global"; 
    });
}
