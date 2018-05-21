const text = "§ Hello.§ My name is Gustavo.§";

const run = () => {
    let i = 0;
    const writeText = (t, itv) => {
    if(i >= t.length)
        return clearInterval(itv);
    if(t[i] === "§")
        document.querySelector("#n").innerHTML += "<br> > ";
    else
        document.querySelector("#n").innerHTML += t[i];
    i++;
    }
    let itv = setInterval(writeText, 100, text);
};

run();
document.querySelector("p").addEventListener("click", run);
