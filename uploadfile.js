// uploadfile.js
// Script untuk mengedit data dinamis pada kurir.html, pembersihan.html, dan website.html tanpa mengubah HTML secara manual

// Struktur data awal (bisa di-load dari server atau localStorage)
const dataLayanan = {
    kurir: {
        judul: "Layanan Kurir Profesional",
        deskripsi: "Pengiriman cepat, aman, dan terpercaya untuk kebutuhan bisnis dan pribadi Anda.",
        fitur: [
            "Tim kurir berpengalaman dan profesional",
            "Pengiriman tepat waktu dan aman",
            "Layanan pelacakan real-time",
            "Dukungan pelanggan responsif",
            "Jangkauan pengiriman luas",
        ],
        info: "Kami siap membantu Anda mengirimkan barang dengan cepat dan aman ke berbagai tujuan. Percayakan kebutuhan pengiriman Anda pada ATOM untuk solusi terbaik!"
    },
    pembersihan: {
        judul: "Layanan Pembersihan Rumah",
        deskripsi: "Jasa profesional membersihkan rumah untuk menciptakan lingkungan yang bersih dan nyaman.",
        fitur: [
            "Tim pembersih terlatih dan ramah",
            "Menggunakan alat & bahan berkualitas",
            "Pelayanan cepat dan efisien",
            "Jadwal fleksibel sesuai kebutuhan",
            "Harga transparan dan terjangkau"
        ],
        info: "Percayakan kebersihan rumah Anda pada tim profesional ATOM untuk hasil maksimal dan memuaskan!"
    },
    website: {
        judul: "Pembuatan Website Profesional",
        deskripsi: "Layanan pembuatan website profesional untuk mendukung pertumbuhan dan kebutuhan bisnis Anda.",
        fitur: [
            "Desain modern dan responsif",
            "SEO friendly",
            "Dukungan maintenance",
            "Integrasi fitur bisnis",
            "Proses pengerjaan cepat"
        ],
        info: "Tingkatkan citra bisnis Anda dengan website profesional dari ATOM. Konsultasikan kebutuhan Anda sekarang!"
    }
};

// Fungsi untuk update data layanan
document.addEventListener('DOMContentLoaded', function() {
    // Cek halaman dan update konten sesuai data
    const path = window.location.pathname.toLowerCase();
    if (path.includes('kurir.html')) {
        updateLayanan('kurir');
    } else if (path.includes('pembersihan.html')) {
        updateLayanan('pembersihan');
    } else if (path.includes('website.html')) {
        updateLayanan('website');
    }
});

function updateLayanan(jenis) {
    const data = dataLayanan[jenis];
    if (!data) return;
    // Judul utama
    const h1 = document.querySelector('h1');
    if (h1) h1.textContent = data.judul;
    // Deskripsi utama
    const lead = document.querySelector('.lead');
    if (lead) lead.textContent = data.deskripsi;
    // Fitur layanan (ul.list-group)
    const fiturList = document.querySelector('.list-group');
    if (fiturList && data.fitur) {
        fiturList.innerHTML = '';
        data.fitur.forEach(f => {
            const li = document.createElement('li');
            li.className = 'list-group-item';
            li.innerHTML = `&check; ${f}`;
            fiturList.appendChild(li);
        });
    }
    // Info tambahan (paragraf setelah fitur)
    const infoP = fiturList ? fiturList.nextElementSibling : null;
    if (infoP && infoP.tagName === 'P') {
        infoP.textContent = data.info;
    }
}

// Fungsi untuk mengedit data dari luar (misal: dari admin panel atau file upload)
function editLayanan(jenis, newData) {
    if (dataLayanan[jenis]) {
        Object.assign(dataLayanan[jenis], newData);
        updateLayanan(jenis);
    }
}

// Contoh penggunaan editLayanan:
// editLayanan('kurir', { judul: 'Kurir Super Cepat', deskripsi: 'Pengiriman kilat!' });
// Data bisa juga di-load dari file JSON atau API sesuai kebutuhan.
