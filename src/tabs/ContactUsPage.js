const ContactUsPage = () => {
    const text = document.createElement('div');
    text.textContent = 'Contact Us';
    text.classList.add('title');

    const intro = document.createElement('div');
    intro.classList.add('intro');

    const intro__inner = document.createElement('div');
    intro__inner.classList.add('intro__inner');

    intro__inner.appendChild(text);
    intro.appendChild(intro__inner);

    return intro;
}

export default ContactUsPage;