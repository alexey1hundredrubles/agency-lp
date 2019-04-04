const handler = ({ target }) => {
	if (
		target.parentElement.classList.contains("pictures") &&
		!document.body.querySelector(".selected")
	) {
		let cssClass = target.dataset.num;
		if (target.classList.contains(cssClass)) return;
		target.classList.add("selected");
		target.classList.toggle(cssClass);
		setTimeout(() => {
			target.scrollIntoView({ behavior: "smooth" });
		}, 300);
	} else if (document.body.querySelector(".selected")) {
		document.body.querySelectorAll(".pictures>img").forEach(item => {
			item.className = "";
		});
	}
};

let chosen = "all";
const handleChose = ({ target }) => {
	if (
		target.classList.contains("types") &&
		!target.classList.contains("chosen")
	) {
		document.querySelectorAll(".types").forEach(item => {
			item.classList.remove("chosen");
		});
		target.classList.add("chosen");

		let targetType = target.dataset.type;

		document.querySelector(`.pictures.${chosen}`).style.opacity = "0";
		document.querySelector(`.pictures.${targetType}`).style.opacity = "1";

		setTimeout(() => {
			document.querySelector(`.pictures.${chosen}`).style.display =
				"none";
			document.querySelector(`.pictures.${targetType}`).style.display =
				"grid";
			chosen = targetType;
		}, 300);
	}
};

handlePerson = ({ target }) => {
	let person = target.closest(".person");
	let name = target.closest("p")
		? target.closest("p").textContent
		: person.firstElementChild.textContent;

	personPicture.style.backgroundImage = getComputedStyle(
		person
	).backgroundImage;
	document.getElementById("name").textContent = name;
};

scroll = ({target}) =>{
	let to=document.getElementById(target.dataset.to)
	to.scrollIntoView({behavior:'smooth'})
}

scrollBtn=()=>{
	if(window.pageYOffset>200){
		scrollTop.style.display='block'
	} else if (window.pageYOffset<200){
		scrollTop.style.display='none'
	}
}

document.body.addEventListener("click", handler);

document.querySelector(".select").addEventListener("click", handleChose);

document.querySelectorAll(".person").forEach(person => {
	person.addEventListener("click", handlePerson);
});

document.querySelectorAll(".link").forEach(link => {
	link.addEventListener("click", scroll);
});

btnTop.addEventListener('click',scroll)

scrollTop.addEventListener('click',scroll)

window.addEventListener('scroll',scrollBtn)