function trocarSom() {
    document.getElementsByTagName("source")[0].src = `sons/somAnimal${localStorage.getItem("som")}.mp3`;
}

function init() {

    localStorage.setItem("som", 0);

    const targets = document.getElementsByClassName("meusTargets");
    if (!targets || targets.length <= 0) return;
    for (let i = 0; i < targets.length; i++) {
        // if (i >= 10) {
        //     targets[i].addEventListener("targetFound", (e) => {
        //         alert("Errouuuuuuuuuuuuu!");
        //     });
        // } else {
            targets[i].addEventListener("targetFound", (e) => {
                if (localStorage.getItem("som") == i) {
                    alert("Acertou, boa.");
                    localStorage.setItem("som", (i + 1));
                    trocarSom();
                } else {
                    alert("Errouuuuuuuuuuuuu!");
                }
            });
        // }
    }

}

init();