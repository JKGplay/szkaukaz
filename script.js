const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");

const sec1 = document.querySelector("#sec1");
const sec2 = document.querySelector("#sec2");
const sec3 = document.querySelector("#sec3");
const sec4 = document.querySelector("#sec4");

btn1.addEventListener("click", () => openTab(1));
btn2.addEventListener("click", () => openTab(2));
btn3.addEventListener("click", () => openTab(3));
btn4.addEventListener("click", () => openTab(4));

let activeBtn = 1;

function openTab(arg) {
	if (activeBtn == arg) {
		return;
	} else {
		sec1.style.transition = "0.7s";
		sec2.style.transition = "0.7s";
		sec3.style.transition = "0.7s";
		sec4.style.transition = "0.7s";

		sec1.style.transform = "translate(0, -2000px)";
		sec2.style.transform = "translate(0, -2000px)";
		sec3.style.transform = "translate(0, -2000px)";
		sec4.style.transform = "translate(0, -2000px)";

		setTimeout(() => {
			switch (arg) {
				case 1:
					sec1.style.display = "block";
					sec2.style.display = "none";
					sec3.style.display = "none";
					sec4.style.display = "none";
					break;
				case 2:
					sec1.style.display = "none";
					sec2.style.display = "block";
					sec3.style.display = "none";
					sec4.style.display = "none";
					break;
				case 3:
					sec1.style.display = "none";
					sec2.style.display = "none";
					sec3.style.display = "block";
					sec4.style.display = "none";
					break;
				case 4:
					sec1.style.display = "none";
					sec2.style.display = "none";
					sec3.style.display = "none";
					sec4.style.display = "block";
					break;
			}
			setTimeout(() => {
				sec1.style.transform = "translate(0, 0)";
				sec2.style.transform = "translate(0, 0)";
				sec3.style.transform = "translate(0, 0)";
				sec4.style.transform = "translate(0, 0)";
			}, 200);
		}, 200);
		switch (arg) {
			case 1:
				btn1.classList.add("active");
				btn2.classList.remove("active");
				btn3.classList.remove("active");
				btn4.classList.remove("active");
				activeBtn = 1;
				break;
			case 2:
				btn1.classList.remove("active");
				btn2.classList.add("active");
				btn3.classList.remove("active");
				btn4.classList.remove("active");
				activeBtn = 2;
				break;
			case 3:
				btn1.classList.remove("active");
				btn2.classList.remove("active");
				btn3.classList.add("active");
				btn4.classList.remove("active");
				activeBtn = 3;
				break;
			case 4:
				btn1.classList.remove("active");
				btn2.classList.remove("active");
				btn3.classList.remove("active");
				btn4.classList.add("active");
				activeBtn = 4;
				break;
		}

		
	}
}

const todayDate = document.getElementById("date");
let year = new Date().getFullYear();
if (year !== 2023 && year > 2023) {
	todayDate.innerHTML = " - " + year;//jeśli bieżący rok = rok powstania czyli 2023, nie dodawaj myślnika i nowego roku
}