const item = document.getElementById("item");
const weight = document.getElementById("weight");
const profit = document.getElementById("profit");
const result = document.getElementById("result");
const final = document.getElementById("final");
const rem1 = document.getElementById("max");
var remWeight = 0;
var num = 0;
function storeInput()
{
    let max = document.getElementById("max").value;
    let n = document.getElementById("n").value;
    document.getElementById("storedData").innerText = `Max Weight: ${max}, No. of Items: ${n}`;
    document.getElementById("rem").innerText = `${max}`;
    remWeight = parseInt(max);
    num = parseInt(n);
}

save.addEventListener("click",function(event)
{
    event.preventDefault();
    let rows = result.rows;
    if(rows.length > num)
    {
        alert('Item is full');
        return;
    }
    var row = result.insertRow(-1); // "-1" inserts at the end
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    let val = (profit.value/weight.value).toFixed(2);

    cell1.innerHTML = item.value;
    cell2.innerHTML = weight.value;
    cell3.innerHTML = profit.value;
    cell4.innerHTML = val;

    var bu = document.createElement("button");
    bu.textContent = "Delete";
    cell5.appendChild(bu);
    result.append()
    bu.addEventListener("click",function(event)
    {
        row.remove()
    });
    item.value="";
    weight.value="";
    profit.value="";
});
sort.addEventListener("click",function(){
    let rows = Array.from(result.rows).slice(1);
    rows.sort((rowA,rowB)=>{
        let valA = parseFloat(rowA.cells[3].innerText);
        let valB = parseFloat(rowB.cells[3].innerText);
        return valB - valA;
    });
    rows.forEach(row => {
        result.appendChild(row);
    });
});

let rowIndex = 1;
let profit1 = 0;
step.addEventListener("click",function(){
    let rows = result.rows;
    let row = rows[rowIndex++];
    if(rowIndex > rows.length){
        alert("No More Items");
        return;
    }
    let item = row.cells[0].innerText;
    let item_weight = parseInt(row.cells[1].innerText);
    let item_profit = parseInt(row.cells[2].innerText);

    if((remWeight-item_weight)<=0){
        profit1 = profit1 + (remWeight*(item_profit/item_weight));
        remWeight = 0;
    }
    else
    {
        remWeight = remWeight - item_weight;
        profit1 = profit1+item_profit;
    }

    var row1 = final.insertRow(-1); // "-1" inserts at the end
    var cell1 = row1.insertCell(0);
    var cell2 = row1.insertCell(1);
    var cell3 = row1.insertCell(2);

    cell1.innerHTML = remWeight;
    cell2.innerHTML = item;
    cell3.innerHTML = profit1;

    if(remWeight <= 0)
    {
        const answer = document.getElementById("answer").innerText = `Maximum Profit : ${profit1.toFixed(2)}`;
        return;
    }
});
