const AboutPage = () => {
    const intro = document.createElement('div');
    intro.classList.add('intro');

    const intro__inner = document.createElement('div');
    intro__inner.classList.add('intro__inner');

    const title = document.createElement('div');
    title.textContent = 'Pesto Kayang';
    title.classList.add('title');

    intro__inner.appendChild(title);

    const intro__bottom = document.createElement('div');
    intro__bottom.classList.add('intro__bottom');

    const bottom_left = document.createElement('div');
    bottom_left.classList.add('bottom_left')

    const schedule__item = document.createElement('div');
    schedule__item.classList.add('schedule__item')

    let text1 = document.createElement('div');
    text1.textContent = 'Monday-Friday';
    text1.classList.add('schedule__text');
    schedule__item.appendChild(text1);

    text1 = document.createElement('div');
    text1.textContent = '09.00-22.00';
    text1.classList.add('schedule__text');
    schedule__item.appendChild(text1);
    bottom_left.appendChild(schedule__item);

    const schedule__item_ = document.createElement('div');
    schedule__item_.classList.add('schedule__item')

    text1 = document.createElement('div');
    text1.textContent = 'Saturday';
    text1.classList.add('schedule__text');
    schedule__item_.appendChild(text1);

    text1 = document.createElement('div');
    text1.textContent = '09.00-18.00';
    text1.classList.add('schedule__text');
    schedule__item_.appendChild(text1);

    bottom_left.appendChild(schedule__item);
    bottom_left.appendChild(schedule__item_);

    intro__bottom.appendChild(bottom_left);

    const bottom__text = document.createElement('div');
    bottom__text.textContent = 'Rich flavor of tradition Praesent ut sem iaculis, facilisis nisi eget, commodo velit. Sed blandit elit ac vulputate. Praesentn orci condimentum ultrices quis eget urna.';
    bottom__text.classList.add('bottom__text');
    intro__bottom.appendChild(bottom__text);

    intro.appendChild(intro__inner);
    intro.appendChild(intro__bottom);

    return intro;
};

export default AboutPage;