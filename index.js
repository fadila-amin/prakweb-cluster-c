var ani = [
    "Buku","Pulpen"];


function tampil(){
    var lis = document.getElementById("lis");
    
    lis.innerHTML = "";

   
    for(let i = 0; i < ani.length; i++){
        var btnEdit = "<a href='#' onclick='edit("+i+")'>Edit</a>";
        var btnHapus = "<a href='#' onclick='hapus("+i+")'>Hapus</a>";

        lis.innerHTML += "<li>" + ani[i] + " ["+btnEdit + " | "+ btnHapus +"]</li>";        
    }
}

function tambah(){
    var input = document.querySelector("input[name=barang]");
    ani.push(input.value);
    tampil();
}

function edit(id){
    var baru = prompt("Nama baru", ani[id]);
    ani[id] = baru;
    tampil();
}

function hapus(id){
    ani.splice(id, 1);
    tampil();
}

tampil();