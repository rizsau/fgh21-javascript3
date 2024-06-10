const cekHariKerja = (day)=>{
    function processPromise(resolve, reject){
        function task(){
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            const cek = dataDay.find((item)=> item === day)
            if(cek){
                resolve(cek)
            }else{
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }
        setTimeout(task, 3000)
    }
    return new Promise(processPromise)
}

// Tugas A (then and catch)
const success = (day)=>{
    console.log('Hari '+ day + ' adalah hari kerja')
}
const failed = (err)=>{
    console.log(err.message)
}
cekHariKerja('minggu')
.then(success)
.catch(failed)

// Tugas B (try and catch)
// const cekHari = async()=>
async function cekHari(hari){
    try{ // jika berhasil/resolve
        const day = await cekHariKerja(hari)
        success(day)
    }catch(err){ // jika gagal/reject
        failed(err)
    }
}

cekHari('kamis')