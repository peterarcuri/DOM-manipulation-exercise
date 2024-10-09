
document.addEventListener("DOMContentLoaded", function ()
{
	task1();
	task2();
	task3();
	task4();
	task5();
	task6();
	task7();
	task8();
	task9();
});

function task1()
{
	document.getElementById("task1").innerText = "Changed using 'innerText'.";
}

function task2()
{
	document.getElementById("task2").innerHTML = "<button>Submit</button>";
}

function task3()
{
	document.body.style.backgroundColor = "#232323";
}

function task4()
{
	document.querySelectorAll(".item").forEach(item => {item.style.border = "2px solid black"});
}

function task5()
{
	document.getElementById("task5").href = "https://www.springboard.com/";
}

function task6()
{
	document.getElementById("task6").value = "DOM Master";
}

function task7()
{
	document.getElementById("task7").classList.add("new-class");
}

function task8()
{
	const button = document.createElement("button");
	button.innerText = "New Button";
	document.getElementById("task8").appendChild(button);
}

function task9()
{
	const task9 = document.getElementById("task9");
	task9.parentNode.removeChild(task9);
}







