function handleKeydown(event) {
    const keyPressed = event.key;

    if(keyPressed === 'ArrowUp')
        return { y: -1 };
    if(keyPressed === 'ArrowDown')
        return { y: +1 };
    if(keyPressed === 'ArrowRight')
        return { x: +1 };
    if(keyPressed === 'ArrowLeft')
        return { x: -1 };
}