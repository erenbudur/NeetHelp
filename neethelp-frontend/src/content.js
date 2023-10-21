import { createContent } from "./populate";


const createModal = async () => {
  let modal = document.createElement("dialog");
  modal.id = "modal";
modal.style.backgroundColor = "#4a4a4a";
modal.style.width = "minMax(600px, 80%)";

  const closeContainer = document.createElement("div");
  closeContainer.style.display = "flex";
  closeContainer.style.justifyContent = "center";
  closeContainer.style.width = "100%";
  closeContainer.style.marginTop= "10px";


  const closeButton = document.createElement("button");

  closeButton.textContent = "Close";
  closeButton.style.padding = "10px";
  closeButton.style.color = "red";
  closeButton.style.border = "1px solid red";
  closeButton.style.borderRadius = "5px";
  closeButton.style.backgroundColor = "transparent";
  closeButton.style.cursor = "pointer";
  closeButton.style.fontWeight = "bold";

  closeButton.onclick = () => {
    modal.close();
  };

  
  closeContainer.appendChild(closeButton);

  modal.appendChild(await createContent());
  modal.appendChild(closeContainer);

  document.body.appendChild(modal);
};

const addButton = () => {
  let buttons = document.querySelector(".z-nav-1 >div >div>div:nth-child(2)");

  if (buttons) {
    let button = document.createElement("button");
    button.innerHTML = "NeetHelp";
    button.onclick = () => {
      let modal = document.getElementById("modal");
      modal.showModal();
    };
    buttons.insertBefore(button, buttons.firstChild);
  }
};

var loadfunction = window.onload;
window.onload = function (event) {
  window.setTimeout(createModal, 2000);
  window.setTimeout(addButton, 2000);

  if (loadfunction) loadfunction(event);
};
