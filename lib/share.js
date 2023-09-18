const viewBtn = document.querySelector(".view-modal"),
    popupshare = document.querySelector(".popupshare"),
    close = popupshare.querySelector(".close"),
    field = popupshare.querySelector(".field"),
    input = field.querySelector("input"),
    copy = field.querySelector("button");
    viewBtn.onclick = ()=>{
      popupshare.classList.toggle("show");
    }
    close.onclick = ()=>{
      viewBtn.click();
    }
    copy.onclick = ()=>{
      input.select(); 
      if(document.execCommand("copy")){
        field.classList.add("active");
        copy.innerText = "Copied";
        setTimeout(()=>{
          window.getSelection().removeAllRanges(); 
          field.classList.remove("active");
          copy.innerText = "Copy";
        }, 3000);
      }
    }