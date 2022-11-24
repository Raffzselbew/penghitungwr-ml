function welcomeMsg() {
    const welcomeMsgEl = document.querySelector("#welcomeMsg");
    let array = 0;

    const takapedia = `<a href="https://msha.ke/takapedia/" target="_blank">takapedia</a>`;
    const IG = `<a href="https://www.instagram.com/manxtodd/" target="_blank">manxtodd</a>`;
    const WA = `<a href="https://api.whatsapp.com/send?phone=299554121&text=Hi" target="_blank">whatsapp</a>`;
    const githubGw = `<a href="https://github.com/manxtodd/" target="_blank">github</a>`

    const msg1 = `<p class="animation mb-0 text-truncate">JOKI, TOP UP & GIFT SKIN ML di ${takapedia} ya [StevenJohannes]</p>`;
    const msg2 = `<p class="animation mb-0 text-truncate">Contact Me On IG: ${IG} / WA: ${WA}</p>`;
    const msg3 = `<p class="animation mb-0 text-truncate">WR hanya sebatas angka, jangan berlebihan.</p>`;
    const msg4 = `<p class="animation mb-0 text-truncate">Follow ${githubGw} saya juga ya</p>`;
    const msg5 = `<p class="animation mb-0 text-truncate">Jangan lupa follow sosmed saya dibawah ya</p>`;

    let arrayEl = [msg1, msg2, msg3, msg4, msg5];
    let arrayMax = 5;
    setInterval(() => {
        welcomeMsgEl.innerHTML = arrayEl[array];

        array++;
        if (array >= arrayMax) {
            array = 0;
        }
    }, 4000);
}
