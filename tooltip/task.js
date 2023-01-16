let hasToolTip = document.querySelectorAll(".has-tooltip");
console.log(hasToolTip);


for (let i = 0; i < hasToolTip.length; i++) {
    hasToolTip[i].onclick = function () {
        if (hasToolTip[i].querySelector("div") == null) {
            let toolTip = document.createElement("div");

            toolTip.className = "tooltip tooltip_active";

            toolTip.innerText = hasToolTip[i].getAttribute("title");
            hasToolTip[i].appendChild(toolTip);

            let positionOfHasToolTip = hasToolTip[i].getBoundingClientRect();

            toolTip.style = `position:absolute; left:${positionOfHasToolTip.left}px`;
        } else {
            hasToolTip[i].querySelector("div").remove();
        }
        return false;
    };
}