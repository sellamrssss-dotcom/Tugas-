// update.js
// Script untuk menambah card layanan pada index.html secara dinamis
// Pastikan script ini di-include di index.html setelah elemen card

// Struktur data awal card (bisa di-load dari server/localStorage)
let cards = [
    {
        href: "website.html",
        icon: "bi-globe2",
        title: "Pembuatan Website",
        desc: "Layanan pembuatan website profesional untuk mendukung pertumbuhan dan kebutuhan bisnis Anda."
    },
    {
        href: "kurir.html",
        icon: "bi-truck",
        title: "Kurir",
        desc: "Jasa penjualan kurir profesional untuk mendukung kebutuhan pengiriman bisnis Anda."
    },
    {
        href: "pembersihan.html",
        icon: "bi-people-fill",
        title: "Pembersihan Rumah",
        desc: "Jasa profesional membersihkan rumah untuk menciptakan lingkungan yang bersih dan nyaman."
    },
    {
        href: "konten.html",
        icon: "bi-file-earmark-text",
        title: "Konten Bisnis",
        desc: "Layanan pembuatan konten bisnis profesional untuk meningkatkan branding, promosi, dan daya tarik usaha Anda."
    },
    {
        href: "les.html",
        icon: "bi-mortarboard-fill",
        title: "Les Privat",
        desc: "Layanan les privat profesional untuk membantu meningkatkan prestasi belajar siswa dengan metode yang efektif dan pengajar berpengalaman."
    },
    {
        href: "program.html",
        icon: "bi-code-slash",
        title: "Advance Program ",
        desc: "Program-program menarik yang kami tawarkan untuk meningkatkan keterampilan dan pengetahuan Anda."
    }
];

function renderCards() {
    const row = document.querySelector('.row.text-center');
    if (!row) return;
    row.innerHTML = '';
    cards.forEach((card) => {
        const col = document.createElement('div');
        col.className = 'col-md-4 mb-4';
        col.innerHTML = `
            <a href="${card.href}" class="text-decoration-none text-danger">
                <div class="card h-100 shadow">
                    <div class="card-body">
                        <i class="bi ${card.icon} display-4 text-danger"></i>
                        <h5 class="card-title mt-3">${card.title}</h5>
                        <p class="card-text">${card.desc}</p>
                    </div>
                </div>
            </a>
        `;
        row.appendChild(col);
    });
}

function tambahCard(card) {
    cards.push(card);
    renderCards();
}

document.addEventListener('DOMContentLoaded', renderCards);

// Contoh penggunaan dari console:
// tambahCard({ href: 'baru.html', icon: 'bi-star', title: 'Baru', desc: 'Deskripsi baru.' });
