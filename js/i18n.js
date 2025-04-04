// Fungsi untuk mengubah bahasa
function changeLanguage(lang) {
    // Simpan preferensi bahasa
    localStorage.setItem('language', lang);
    
    // Ambil semua elemen yang perlu diterjemahkan
    const elements = document.querySelectorAll('[data-i18n]');
    
    // Terjemahkan setiap elemen
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
}

// Terjemahan untuk semua bahasa
const translations = {
    'id': {
        'nav.home': 'Beranda',
        'nav.about': 'Tentang Saya',
        'nav.projects': 'Proyek Saya',
        'nav.skills': 'Keahlian Saya',
        'button.darkmode': 'Mode Gelap',
        'home.title': 'HALO NAMA SAYA KADEK JULI SELAMAT DATANG DI WEBSITE SAYA',
        'about.whoami': 'Siapa Saya?', 
        'about.bio': 'Halo 😊👋, saya I Kadek Juliartawan, umur saya 21 tahun dan tinggal di Sukawati, Gianyar, Bali. Sekarang saya masih kuliah di INSTIKI, semester 4. Saya seorang developer pemula yang masih terus belajar dan sedang mencoba mengembangkan beberapa proyek kecil di GitHub. Terima kasih sudah mampir ke website saya dan meluangkan waktu untuk melihat-lihat isi di sini. Ngomong-ngomong, saya juga punya mimpi besar — saya pengen banget bisa kerja di Jepang suatu hari nanti, jadi app developer dan juga desainer di sana. Belajar bahasa Jepang itu nggak gampang, tapi saya percaya kalau terus konsisten, pasti bisa. Alasan saya pengen ke Jepang itu... anu, pengen ke Akihabara buat lihat anime, terus pengen banget lihat Gunung Fuji yang indah, juga jalan-jalan ke desa tradisional dan kuil-kuil di sana. Semoga suatu hari nanti impian itu bisa tercapai ya 🙏✨',
        'about.hobbies': 'Hobi Saya', 
        'about.achievements': 'Projek yang saya kerjakan',
        'projects.title': 'PROYEK SAYA',
        'skills.title': 'KEAHLIAN SAYA',
        'footer.thanks': 'Terima kasih telah mengunjungi website saya!',
        'music.toggle': 'Nyalakan/Matikan Musik',
        'pengalaman.magang': 'menguasai wordpress di magang',
        'pengalaman.projek': 'buat projek laravel, html, css dan android studio',
        'pengalaman.portofolio': 'pengalaman buat website portofolio',
        'hobbies.coding': 'Menonton anime dan membaca manga',
        'hobbies.music': 'Main musik dan bernyanyi',
        'hobbies.photo': 'Saya juga suka ngoding',
        'hobbies.reading': 'Kadang-kadang ikut acara cosplay'
    },
    'en': {
        'nav.home': 'Home',
        'nav.about': 'About me',
        'nav.projects': 'My Projects',
        'nav.skills': 'My Skills',
        'button.darkmode': 'Dark Mode',
        'home.title': 'HELLO MY NAME IS KADEK JULI WELCOME TO MY WEBSITE',
        'about.whoami': 'Who Am I?',
       'about.bio': 'Hey 😊👋, I’m I Kadek Juliartawan, 21 years old, currently living in Sukawati, Gianyar, Bali. I’m a 4th semester student at INSTIKI, still learning and growing as a beginner developer. Right now, I’m working on some small projects on GitHub. Thanks for stopping by and spending time exploring my website. Oh, and by the way—I have a big dream! I really want to work in Japan someday as an app developer and designer. Learning Japanese isn’t easy, but I’m determined to keep going and make it happen. Uhh, the reason I want to go to Japan is... well, to visit Akihabara and see all the anime stuff, admire the beautiful Mount Fuji, and explore those peaceful traditional villages and shrines. I hope that one day, this dream will come true ✨',
        'about.hobbies': 'My Hobbies',
        'about.achievements': 'The project I am currently working on',
        'projects.title': 'MY PROJECTS',
        'skills.title': 'MY SKILLS',
        'footer.thanks': 'Thanks for visiting my website!',
        'music.toggle': 'Toggle Music',
        'pengalaman.magang': 'mastered WordPress during internship',
        'pengalaman.projek': 'created projects with Laravel, HTML, CSS, and Android Studio',
        'pengalaman.portofolio': 'experience building a portfolio website',
        'hobbies.coding': 'Watching Anime and reading manga',
        'hobbies.music': 'Playing music and singing',
        'hobbies.photo': 'I\'m also coding',
        'hobbies.reading': 'Sometimes, attending cosplay events'
    },
    'ja': {
        'nav.home': 'ホーム',
        'nav.about': '私について',
        'nav.projects': 'プロジェクト',
        'nav.skills': 'スキル',
        'button.darkmode': 'ダークモード',
        'home.title': 'こんにちは、私の名前はカデック・ジュリです。私のウェブサイトへようこそ',
        'about.whoami': '自己紹介',
        'about.bio': 'やっほー😊👋 バリ島ギャニャールのスカワティに住んでるカデック・ジュリアルタワンって言います。今はINSTIKIのキャンパスで4セメスター目の学生で、まだまだ初心者の開発者だけど、少しずつGitHubで自分の小さなプロジェクトを作ってます。このサイトを見に来てくれて本当にありがとう！あとね、実は将来、日本でアプリ開発者＆デザイナーとして働くのが夢なんだ〜✨日本語の勉強って難しいけど、コツコツ頑張ってるよ💪 えっと、なんで日本に行きたいかっていうと…秋葉原でアニメを見たり、富士山の美しい景色を眺めたり、日本の伝統的な村や神社も巡ってみたいなって思ってて。いつかその夢が叶うといいな〜🌸',
        'about.hobbies': '趣味',
        'about.achievements': '現私が開発したプロジェクト',
        'projects.title': '私のプロジェクト',
        'skills.title': '私のスキル',
        'footer.thanks': '私のウェブサイトをご覧いただきありがとうございます！',
        'music.toggle': '音楽の切り替え',
        'pengalaman.magang': 'インターンシップでWordPressを習得しました',
        'pengalaman.projek': 'Laravel、HTML、CSS、Android Studioでプロジェクトを作成しました',
        'pengalaman.portofolio': 'ポートフォリオウェブサイトの制作経験',
        'hobbies.coding': 'アニメを見たりマンガを読んだりするのが好きです',
        'hobbies.music': '音楽を演奏したり歌ったりします',
        'hobbies.photo': 'コーディングも好きです',
        'hobbies.reading': '時々コスプレイベントにも参加します'
    }
};


// Event listener untuk selector bahasa
document.getElementById('language-select').addEventListener('change', function() {
    changeLanguage(this.value);
});

// Cek bahasa yang disimpan atau default ke bahasa browser
const savedLanguage = localStorage.getItem('language') || navigator.language.split('-')[0];
const defaultLanguage = ['id', 'en', 'ja'].includes(savedLanguage) ? savedLanguage : 'id';
document.getElementById('language-select').value = defaultLanguage;

// Terapkan bahasa saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    changeLanguage(defaultLanguage);
});

