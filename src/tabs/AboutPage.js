const Intro = () => {
    const intro = document.createElement('div');
    intro.classList.add('intro');

    const intro__inner = document.createElement('div');
    intro__inner.classList.add('intro__inner');

    const title = document.createElement('div');
    title.textContent = 'Qazaq Kitchen';
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

const Stats = () => {
    const stats = document.createElement('div');
    stats.classList.add('stats');

    const container = document.createElement('div');
    container.classList.add('container');
    
    const stats__inner = document.createElement('div');
    stats__inner.classList.add('stats__inner');

    const stats__images = document.createElement('div');
    stats__images.classList.add('stats__images');

    let img = document.createElement('img');
    img.classList.add('stats__image')
    stats__images.appendChild(img);

    img = document.createElement('img');
    img.classList.add('stats__image')
    stats__images.appendChild(img);

    img = document.createElement('img');
    img.classList.add('stats__image')
    stats__images.appendChild(img);
    
    stats__inner.appendChild(stats__images);

    const stats__text = document.createElement('div');
    stats__text.classList.add('stats__text');
    stats__text.textContent = 'Rich flavor of tradition Praesent ut sem iaculis, facilisis nisi eget, commodo velit. Sed blandit elit ac vulputate. Praesentn orci condimentum ultrices quis eget urna. Praesent ut sem iaculis, facilisis nisi eget, commodo velit. Sed blandit elit ac vulputate. Praesentn orci condimentum ultrices quis eget urna';
    stats__inner.appendChild(stats__text);


    const stats__info = document.createElement('div');
    stats__info.classList.add('stats__info');

    const info__inner = document.createElement('div');
    info__inner.classList.add('info__inner');

    let info__item = document.createElement('div');
    info__item.classList.add('info__item');
    let num = document.createElement('span')
    num.classList.add('info__number');
    num.textContent = '10,000+';
    info__item.appendChild(num);
    info__item.appendChild(document.createTextNode('Satisfied Customers'));
    info__inner.appendChild(info__item);

    info__item = document.createElement('div');
    info__item.classList.add('info__item');
    num = document.createElement('span')
    num.classList.add('info__number');
    num.textContent = '200+';
    info__item.appendChild(num);
    info__item.appendChild(document.createTextNode('Menu'));
    info__inner.appendChild(info__item);

    info__item = document.createElement('div');
    info__item.classList.add('info__item');
    num = document.createElement('span');
    num.classList.add('info__number');
    num.textContent = '95%';
    info__item.appendChild(num);
    info__item.appendChild(document.createTextNode('Users report healthier'));
    info__inner.appendChild(info__item);

    stats__info.appendChild(info__inner);

    stats__inner.appendChild(stats__info);

    container.appendChild(stats__inner);
    stats.appendChild(container);


    return stats;
}

const AboutPage = () => {
    const aboutPage = document.createElement('div');
    aboutPage.appendChild(Intro());
    aboutPage.appendChild(Stats());

    return aboutPage;
}

export default AboutPage;