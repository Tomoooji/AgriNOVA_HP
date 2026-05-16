// ハンバーガーメニューの開閉機能
function toggleMenu() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.getElementById('nav-menu');
    
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
}

// ページ読み込み時の初期化
document.addEventListener('DOMContentLoaded', function() {
    // メニュー項目がクリックされたらメニューを閉じる
    const menuLinks = document.querySelectorAll('nav ul li a');
    
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            const hamburger = document.querySelector('.hamburger');
            const nav = document.getElementById('nav-menu');
            
            // ハッシュリンク（#で始まるリンク）の場合のみメニューを閉じる
            if (this.getAttribute('href').startsWith('#')) {
                hamburger.classList.remove('active');
                nav.classList.remove('active');
            }
        });
    });
    
    // スムーズスクロール機能
    menuLinks.forEach(link => {
        if (link.getAttribute('href').startsWith('#')) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const headerHeight = document.querySelector('header').offsetHeight;
                    const targetPosition = targetSection.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        }
    });
    
    // ウィンドウリサイズ時にメニューをリセット
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            if (window.innerWidth > 768) {
                const hamburger = document.querySelector('.hamburger');
                const nav = document.getElementById('nav-menu');
                
                hamburger.classList.remove('active');
                nav.classList.remove('active');
            }
        }, 250);
    });
});

// メニュー外をクリックしたときにメニューを閉じる
document.addEventListener('click', function(event) {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.getElementById('nav-menu');
    const header = document.querySelector('header');
    
    // クリックされた要素がヘッダー外で、メニューが開いている場合
    if (!header.contains(event.target) && nav.classList.contains('active')) {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
    }
});
