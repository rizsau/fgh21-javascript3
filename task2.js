const getMonth = (callback) => {
    setTimeout(() => {
        let error = false
        let month = [
            'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli',
            'Agustus', 'September', 'Oktober', 'November', 'Desember'
        ]
        if (!error) { // negasi membuat nilai jd true
            callback(null, month) // setiap parameter ada korelasinya
            // null menandakan tidak ada error, mengembalikan nilai month
        } else {
            callback(new Error('Sorry Data Not Found'), []) // array = tipe data param2 sama
        }
    }, 4000)
}

const showMonth = (error, month) => {
    if(!error){
        const bulan = month.map(item => item) // pemenuhan tugas
        console.log(bulan)
        // console.log(month)
    }else{
        console.log(error.message)
    }
}

getMonth(showMonth)