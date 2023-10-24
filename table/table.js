let btn = document.querySelector("button");
let container = document.querySelector("tbody");
let SearchBtn = document.querySelector("#search");
let arr = [
    {
        name: "Aysel",
        surname: "Abdullayeva",
        age: 19
    },
    {
        name: "Gulsen",
        surname: "Setterova",
        age: 26
    },
    {
        name: "Zulfiyye ",
        surname: "Eliyeva",
        age: 22
    },
    {
        name: "Xedice",
        surname: "Zerbeliyeva",
        age: 19
    }
]
Show();

function Show() {
    container.innerHTML = "";
    arr.forEach((element, index) => {
        var setir = document.createElement("tr");
        var sutun1 = document.createElement("td");
        var sutun2 = document.createElement("td");
        var sutun3 = document.createElement("td");
        var sutun4 = document.createElement("td");
        var sutun5 = document.createElement("td");
        var sutun6 = document.createElement("td");
        setir.appendChild(sutun1);
        setir.appendChild(sutun2);
        setir.appendChild(sutun3);
        setir.appendChild(sutun4);
        setir.appendChild(sutun5);
        setir.appendChild(sutun6);
        container.appendChild(setir);

        sutun1.innerHTML = index + 1;
        sutun2.innerHTML = element.name;
        sutun3.innerHTML = element.surname;
        sutun4.innerHTML = element.age;

        SearchBtn.addEventListener("keyup", () => {
            var btnvalue = SearchBtn.value;
            if (setir.innerHTML.includes(btnvalue)) {
                setir.style.display = "table-row";
            }
            else {
                setir.style.display = "none"
            }
        })

        let EditIcon = document.createElement("i");
        let DeleteIcon = document.createElement("i");
        DeleteIcon.classList.add("fa-solid")
        DeleteIcon.classList.add("fa-trash")
        sutun6.appendChild(DeleteIcon)
        EditIcon.classList.add("fa-solid")
        EditIcon.classList.add("fa-pen-to-square");
        sutun5.appendChild(EditIcon)
        DeleteIcon.addEventListener("click", () => {
            setir.remove();
            //    let arrIndex=setir.children[0].textContent;
            //     arr.splice(arrIndex-1,1);
            //    console.log(arr);
        })
        let updatemodal = document.querySelector(".updatemodal");
        EditIcon.addEventListener("click", () => {
            UpdateName.value = setir.children[1].textContent;
            UpdateSurname.value = setir.children[2].textContent;
            UpdateAge.value = setir.children[3].textContent;
            let arrIndex = setir.children[0].textContent;
            console.log(arrIndex);
            updatemodal.style.display = "block";
            document.querySelector(".updatebtn").addEventListener("click", function () {
                console.log(arr[arrIndex - 1])
                arr[arrIndex - 1].name = UpdateName.value;
                arr[arrIndex - 1].surname = UpdateSurname.value;
                arr[arrIndex - 1].age = UpdateAge.value;
                Show();
                updatemodal.style.display = "none";
            })
        })
    })
}
let newModal = document.querySelector(".newmodal");
btn.addEventListener("click", () => {
    newModal.style.display = "block";
})

let createbtn = document.querySelector(".createbtn");
createbtn.addEventListener("click", () => {
    var newObj = {};
    newObj.name = newName.value;
    newObj.surname = newSurname.value;
    newObj.age = newAge.value;
    // console.log(newObj)
    arr.push(newObj)
    Show();
    //    console.log(arr);
    newModal.style.display = "none";
})

