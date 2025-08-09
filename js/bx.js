// Selecting all required elements
const wrapper = document.querySelector(".wrapper"),
toast = wrapper.querySelector(".toast"),
title = toast.querySelector("span"),
subTitle = toast.querySelector("p"),
icon = toast.querySelector(".icon"),
closeIcon = toast.querySelector(".close-icon");

window.onload = () => {
    function showNotification() {
        wrapper.classList.remove("hide");
        title.innerText = "Thông Báo";
        subTitle.innerText = "Do tui lười lên chỉ hoàn tiện đc phần about, post, và group";
        icon.innerHTML = '<i class="uil uil-bell"></i>';
        closeIcon.onclick = () => { // hide toast notification on close icon click
            wrapper.classList.add("hide");
        };
        setTimeout(() => { // hide the toast notification automatically after 5 seconds
            wrapper.classList.add("hide");
        }, 5000);
    }

    // Display the notification on page load
    showNotification();
}
