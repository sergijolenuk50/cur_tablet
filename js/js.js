console.log("hello");
window.onload = () => {
    load();
}
let btn = document.getElementById('btn');
let btn_del = document.getElementById('btn_del');
let btn_search = document.getElementById('btn_search');
let table = document.querySelector('#table_ele tbody');
let model = document.getElementById('mod');
let countri = document.getElementById('countri');
let color = document.getElementById('color');
let ser = document.getElementById('ser');
let product = {
    mod: "Tesla",
    cou: "USA",
    col: "RED"
};
let list = [];
list.push(product);

btn.addEventListener('click', function (event) {
    event.preventDefault();
    // const inputs = document.querySelectorAll('form input');

    let tr = document.createElement("tr");
if(model.value ==="" || countri.value ===""|| color.value ==="" ){
alert("Corect ")
}
else
{

    product = {
       mod: model.value,
       cou: countri.value,
       col: color.value
   };
   console.log(product);
   console.log("uyr7uru65r");
   list.push(product);
   tables(product, tr);
}

    // table.appendChild(tr);

    // let td1 = document.createElement('td');
    // let td2 = document.createElement('td');
    // let td3 = document.createElement('td');

    // td1.innerHTML = product.mod;
    // tr.appendChild(td1);
    // td2.innerHTML = product.cou;
    // tr.appendChild(td2);
    // td3.innerHTML = product.col;
    // tr.appendChild(td3);

    // table.innerHTML += `<tr>
    //                         <td>${mod}</td>
    //                         <td>Test</td>
    //                         <td>Test</td>
    //                     </tr>`;
    console.log(list);
});
function tables(product,tr ){
table.appendChild(tr);
console.log("hi");
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');

    td1.innerHTML = product.mod;
    tr.appendChild(td1);
    td2.innerHTML = product.cou;
    tr.appendChild(td2);
    td3.innerHTML = product.col;
    tr.appendChild(td3);
}

btn_del.addEventListener('click', function () {
    table.innerHTML = " ";

})

btn_search.addEventListener('click', function (e) {
    e.preventDefault();
    table.innerHTML = " ";
    list.forEach(ele => {
        // console.log(ele);
        console.log(ser.value);
        if (ele.mod == ser.value || ele.cou == ser.value || ele.col ==ser.value) {

            let tr = document.createElement("tr");
            table.appendChild(tr);
            let td1 = document.createElement('td');
            td1.innerHTML = ele.mod;
            let td2 = document.createElement('td');
            td2.innerHTML = ele.cou;
            let td3 = document.createElement('td');
            td3.innerHTML = ele.col;
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            // console.log(ele1);
        }
    })

});


function load(){
    list.forEach(ele => {
        // console.log(ele);
        // console.log(ser.value);
        // if (ele.mod == ser.value || ele.cou == ser.value || ele.col ==ser.value) {
        // }

            let tr = document.createElement("tr");
            table.appendChild(tr);
            let td1 = document.createElement('td');
            td1.innerHTML = ele.mod;
            let td2 = document.createElement('td');
            td2.innerHTML = ele.cou;
            let td3 = document.createElement('td');
            td3.innerHTML = ele.col;
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            // console.log(ele1);
    })
}

// })