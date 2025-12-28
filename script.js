
document.addEventListener("DOMContentLoaded", function () {

    // 1. Hakkımda Linkini Seçiyoruz (href özelliğine göre)
    const hakkimdaLink = document.querySelector('a[href="#hakkimda"]');

    // 2. İletişim Linkini Seçiyoruz (Mevcut ID'sine göre)
    const iletisimLink = document.getElementById('iletisim');

    // Hakkımda için Çift Tıklama (Double Click) Olayı
    if (hakkimdaLink) {
        hakkimdaLink.addEventListener('dblclick', function (e) {
            // Linkin varsayılan davranışını engellemek istersen: e.preventDefault();
            window.location.href = 'hakkimda.html';
        });
    }

    // İletişim için Çift Tıklama (Double Click) Olayı
    if (iletisimLink) {
        iletisimLink.addEventListener('dblclick', function (e) {
            window.location.href = 'iletisim.html';
        });
    }
});