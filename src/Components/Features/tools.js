import { navbarHeight } from "../Navbar";

export const scrollTo = (id) => {
    if (id && id != null) {
        let elem = document.querySelector(id);
        if (elem != null) {
            let targetLocation = elem.getBoundingClientRect().top -
                document.querySelector("#main-content").getBoundingClientRect().top -
                navbarHeight;
            window.scrollTo({
                top: targetLocation,
                left: 0,
                behavior: "smooth"
            });
        }
    }
};