function select(colorChange) {
    const existingElement = document.querySelector('.afterClick');
    if (existingElement && existingElement !== colorChange) {
        existingElement.classList.remove('afterClick');
    }
    colorChange.classList.toggle('afterClick');
}



