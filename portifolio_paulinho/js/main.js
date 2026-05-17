// MENU MOBILE
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// EFEITO TYPING
const typingElement = document.getElementById('typing');

const text = "Estudante de ADS | Desenvolvedor em Formação";

let index = 0;

function typingEffect() {

    if(index < text.length) {

        typingElement.innerHTML += text.charAt(index);

        index++;

        setTimeout(typingEffect, 80);
    }
}

typingEffect();

// SCROLL REVEAL
const reveals = document.querySelectorAll('.reveal');

function revealElements() {

    const windowHeight = window.innerHeight;

    reveals.forEach(reveal => {

        const revealTop = reveal.getBoundingClientRect().top;

        if(revealTop < windowHeight - 100) {

            reveal.classList.add('active');
        }

    });

}

window.addEventListener('scroll', revealElements);

// CONTADOR
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {

    counter.innerText = '0';

    const updateCounter = () => {

        const target = +counter.getAttribute('data-target');

        const current = +counter.innerText;

        const increment = target / 100;

        if(current < target) {

            counter.innerText = `${Math.ceil(current + increment)}`;

            setTimeout(updateCounter, 30);

        } else {

            counter.innerText = target;
        }

    };

    updateCounter();

});

// BOTÃO TOPO
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {

    if(window.scrollY > 300) {

        backToTop.style.display = 'block';

    } else {

        backToTop.style.display = 'none';
    }

});

backToTop.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

});