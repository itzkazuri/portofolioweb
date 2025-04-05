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
        'nav.contact': 'kontak saya',
        'button.darkmode': 'Mode Gelap',
        'home.title': 'SELAMAT DATANG DI WEBSITE PORTOFOLIO SAYA',
        'about.whoami': 'Siapa Saya?', 
        'about.bio': 'Halo 😊👋, saya I Kadek Juliartawan, umur saya 21 tahun dan tinggal di Sukawati, Gianyar, Bali. Sekarang saya masih kuliah di INSTIKI, semester 4. Saya ini orangnya agak pemalu kalau pertama kali ketemu orang baru, tapi kalau sudah dekat, saya bakal jadi sangat akrab dan suka ngobrol. Saya juga ambivert — kadang introvert saat di rumah, tapi bisa jadi ekstrovert di kampus atau saat kumpul bareng teman-teman. Saya seorang developer pemula yang masih terus belajar dan sedang mencoba mengembangkan beberapa proyek kecil di GitHub. Terima kasih sudah mampir ke website saya dan meluangkan waktu untuk melihat-lihat isi di sini. Ngomong-ngomong, saya juga punya mimpi besar — saya pengen banget bisa kerja di Jepang suatu hari nanti, jadi app developer dan juga desainer di sana. Belajar bahasa Jepang itu nggak gampang, tapi saya percaya kalau terus konsisten, pasti bisa. Alasan saya pengen ke Jepang itu... anu, saya pengen banget jalan-jalan ke Akihabara buat lihat suasana otaku yang seru dan beli figure anime di sana, terus juga pengen lihat Gunung Fuji yang indah, dan menjelajahi desa tradisional serta kuil-kuil yang tenang. Semoga suatu hari nanti impian itu bisa tercapai ya 🙏✨',
        'about.hobbies': 'Hobi Saya',
        'about.title': "Tentang Saya", 
        'about.achievements': 'Pengalaman yang saya miliki',
        'projects.title': 'PROYEK SAYA',
        'skills.title': 'SKILL SAYA',
        'footer.thanks': 'Terima kasih telah mengunjungi website saya!',
        'music.toggle': 'Nyalakan/Matikan Musik',
        'pengalaman.magang': 'menguasai wordpress di magang',
        'pengalaman.projek': 'buat projek laravel, html, css dan android studio',
        'pengalaman.portofolio': 'pengalaman buat website portofolio',
        'hobbies.coding': 'Menonton anime dan membaca manga',
        'hobbies.music': 'mendengarkan musik',
        'hobbies.photo': 'Saya juga suka ngoding',
        'hobbies.reading': 'Kadang-kadang ikut acara cosplay'
    },
    'en': {
        'nav.home': 'Home',
        'nav.about': 'About me',
        'nav.projects': 'My Projects',
        'nav.skills': 'My Skills',
        'nav.contact': 'contact me',
        'button.darkmode': 'Dark Mode',
        'home.title': 'WELCOME TO MY PORTOFOLIO WEBSITE',
        'about.whoami': 'Who Am I?',
      'about.bio': 'Hey 😊👋, I’m I Kadek Juliartawan, 21 years old, currently living in Sukawati, Gianyar, Bali. I’m a 4th semester student at INSTIKI. I’m the type of person who’s a little shy when meeting new people, but once we get close, I become really friendly and talkative. I consider myself an ambivert — introverted at home, but more extroverted at campus or when hanging out with friends. I’m still learning and growing as a beginner developer, currently working on some small projects on GitHub. Thanks for stopping by and spending time exploring my website. Oh, and by the way—I have a big dream! I really want to work in Japan someday as an app developer and designer. Learning Japanese isn’t easy, but I’m doing my best to stay consistent and keep improving. Uhh, the reason I want to go to Japan is... well, I really want to walk around Akihabara, enjoy the otaku vibes, and buy some anime figures. I also want to see the beautiful Mount Fuji, and visit peaceful traditional villages and shrines. I hope that one day, this dream will come true ✨',
        'about.hobbies': 'My Hobbies',
        'about.title': "About Me",
        'about.achievements': 'Here’s a bit about what I’ve done so far',
        'projects.title': 'MY PROJECTS',
        'skills.title': 'MY SKILLS',
        'footer.thanks': 'Thanks for visiting my website!',
        'music.toggle': 'Toggle Music',
        'pengalaman.magang': 'mastered WordPress during internship',
        'pengalaman.projek': 'created projects with Laravel, HTML, CSS, and Android Studio',
        'pengalaman.portofolio': 'experience building a portfolio website',
        'hobbies.coding': 'Watching Anime and reading manga',
        'hobbies.music': 'listening to music',
        'hobbies.photo': 'I\'m also coding',
        'hobbies.reading': 'Sometimes, attending cosplay events'
    },
    'ja': {
        'nav.home': 'ホーム',
        'nav.about': '私について',
        'nav.projects': 'プロジェクト',
        'nav.skills': 'スキル',
        'nav.contact': 'お問い合わせ',
        'button.darkmode': 'ダークモード',
        'home.title': 'こん私のポートフォリオサイトへようこそ',
        'about.whoami': '自己紹介',
       'about.bio': 'やっほー😊👋 バリ島ギャニャールのスカワティに住んでるカデック・ジュリアルタワンって言います。今はINSTIKIのキャンパスで4セメスター目の学生です。えっと、私の性格をちょっと話すと…初対面のときはちょっと恥ずかしがり屋なんだけど、仲良くなるとすごくおしゃべりでフレンドリーになります😅 あと、自分ではアンビバートだと思ってて、家では静かなインドア派だけど、キャンパスや友達といるときはけっこう外向的になるんだ〜。まだまだ初心者の開発者だけど、少しずつGitHubで自分の小さなプロジェクトを作ってます。このサイトを見に来てくれて本当にありがとう！あとね、実は将来、日本でアプリ開発者＆デザイナーとして働くのが夢なんだ〜✨日本語の勉強って難しいけど、コツコツ頑張ってるよ💪 なんで日本に行きたいかっていうと…えっと、秋葉原をぶらぶら歩いてフィギュアを買ったり、富士山のきれいな景色を見たり、日本の伝統的な村や神社をゆっくり巡ったりしてみたいんだ〜。いつかその夢が叶うといいな〜🌸',
        'about.hobbies': '趣味',
        'about.title': "わたしについて",
        'about.achievements': 'これまでの経験',
        'projects.title': '私のプロジェクト',
        'skills.title': '私のスキル',
        'footer.thanks': '私のウェブサイトをご覧いただきありがとうございます！',
        'music.toggle': '音楽の切り替え',
        'pengalaman.magang': 'インターンシップでWordPressを習得しました',
        'pengalaman.projek': 'Laravel、HTML、CSS、Android Studioでプロジェクトを作成しました',
        'pengalaman.portofolio': 'ポートフォリオウェブサイトの制作経験',
        'hobbies.coding': 'アニメを見たりマンガを読んだりするのが好きです',
        'hobbies.music': '音楽を聴く',
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
document.addEventListener('DOMContentLoaded', function () {
    if (savedLanguage) {
        document.getElementById('language-select').value = savedLanguage;
        changeLanguage(savedLanguage);
    } else {
        detectUserLocationAndSetLanguage();
    }
});

