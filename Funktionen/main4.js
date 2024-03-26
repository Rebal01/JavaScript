function log(...args) {
    let text = "";
    for (let i = 0; i < args.length; i++) {
        text += args[i] + ' ';
    }
    console.log(text);
}
log("hello",true,456456)
