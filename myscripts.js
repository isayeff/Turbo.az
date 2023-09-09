const txt = document.getElementById('txt')
const netice = document.querySelector('#netice')
const netice2 = document.querySelector('#netice2')
const arr = [
    { id: 1, marka: 'Mercedes', qiymet: '10 500', model: 'w202', mator: '2.0', il: '1998', reng: 'silver', img: 'https://turbo.azstatic.com/uploads/full/2022%2F02%2F07%2F16%2F20%2F36%2F05ae3ec7-b845-4458-8033-99eec8aec1a2%2F83217_ryHX2Q7AONB3-jC_sEJ3mQ.jpg' },
    { id: 2, marka: 'Kia', qiymet: '21 000', model: 'Rio', mator: '1.4', il: '2014', reng: 'silver', img: 'https://turbo.azstatic.com/uploads/full/2021%2F09%2F10%2F11%2F40%2F18%2Fbe262b8b-13ff-40ee-9664-4c7c4ea93e4b%2F94552_bf7HpneCobaNn8ooAalBwg.jpg' },
    { id: 3, marka: 'Hyundai', qiymet: '12 000', model: 'Tucson', mator: '2.0', il: '2014', reng: 'black', img: 'https://turbo.azstatic.com/uploads/f660x496/2020%2F02%2F08%2F12%2F31%2F23%2Fdfd4bcdd-5279-4807-85cb-58aa153c900f%2F44290_Il5UqH7nhzVTrAAfdt5BuQ.jpg' },
    { id: 4, marka: 'LADA (VAZ)', qiymet: '35 000', model: '2107', mator: '1.6', il: '2010', reng: 'black', img: 'https://turbo.azstatic.com/uploads/full/2022%2F09%2F29%2F04%2F48%2F26%2Ff85c3fb0-4f77-4157-8b15-a3122bbaf36d%2F15612_S_xRbeuG6jQhZhkc_JM3wg.jpg' },
    { id: 5, marka: 'BMW', qiymet: '28 700', model: 'M5 e39', mator: '4.4', il: '1998', reng: 'blue', img: 'https://turbo.azstatic.com/uploads/full/2020%2F08%2F15%2F17%2F42%2F55%2F5e61d0d8-ac41-42d4-8a34-33f9c563bba8%2F4747_ZOpsrcdSRl_mByG6tDsiqQ.jpg' },
    { id: 6, marka: 'Mercedes', qiymet: '86 500', model: 'CLS', mator: '5.5', il: '2013', reng: 'gray', img: 'https://turbo.azstatic.com/uploads/full/2021%2F12%2F09%2F01%2F51%2F22%2F2e3d6e19-baa7-4625-89e0-d358238808ce%2F21872_z_Z4BhoRifgwGf0Fz_hvJw.jpg' },
    { id: 7, marka: 'Toyota', qiymet: '54 000', model: 'Camry', mator: '3.0', il: '2021', reng: 'white', img: 'https://turbo.azstatic.com/uploads/full/2021%2F06%2F18%2F16%2F16%2F02%2Fd4a556f8-adc6-4ff8-897b-2079ea777987%2F24971_KEan9mcELSSmUAPbxG1KEw.jpg' },
    { id: 8, marka: 'Porche', qiymet: '118 400', model: '911 Carrera', mator: '4.4', il: '2023', reng: 'cyan', img: 'https://turbo.azstatic.com/uploads/full/2020%2F08%2F13%2F13%2F32%2F55%2F012a26df-efae-4cf0-b763-a4c3de17ae23%2F46349_cqQK5HyMFGcJOEMh1pCm1A.jpg' },
    { id: 9, marka: 'Dodge', qiymet: '38 500', model: 'Challenger', mator: '7.2', il: '2018', reng: 'black', img: 'https://turbo.azstatic.com/uploads/full/2021%2F04%2F09%2F10%2F02%2F28%2F9a6bf393-9f08-476b-abc0-d6278f1d6668%2F37456_34ZTVBn26COoCWhsqBx3vw.jpg' },
    { id: 10, marka: 'Nissan', qiymet: '86 000', model: 'GTR R-35', mator: '3.0', il: '2014', reng: 'black', img: 'https://turbo.azstatic.com/uploads/full/2017%2F02%2F16%2F00%2F02%2F00%2F573%2F54000_4wUHTVdrb_-kLx6BJMuF8Q.jpg' },
    { id: 11, marka: 'Audi', qiymet: '124 100', model: 'RS7', mator: '4.0', il: '2015', reng: 'dimgrey', img: 'https://turbo.azstatic.com/uploads/full/2021%2F05%2F29%2F15%2F33%2F07%2Fc9bec2ac-97eb-4e07-bc8a-509f1898dd7d%2F82001_MmzL0_nnwbSnJI6rtabq7Q.jpg' },
]

function addCard() {
    txt.innerHTML = ''
    for (const i of arr) {
        txt.innerHTML += `<div class = 'card'>
                                            <div class = 'card-body'>
                                                <div onclick = 'openn(${i.id})' class = 'card-top'><img src="${i.img}" alt=""></div>
                                                <div class = 'card-bottom'>
                                                    <span class = 'qiymet'>${i.qiymet} AZN</span>
                                                    <span>${i.marka} ${i.model}</span>
                                                    <span>
                                                        ${i.il}, ${i.mator} L, 
                                                        <span style = 'color: ${i.reng}'>${i.reng}</span>
                                                    </span>
                                                    <div>
                                                        <i onclick = "buy('${i.img}', '${i.marka} ${i.model}', '${i.qiymet}', '${i.id}')" class="fa-regular fa-heart"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>`
    }
}
addCard()

let openn = (i) => {
    txt.innerHTML = ''
    let item = arr[i-1]

    txt.innerHTML = `<div class = 'openn-card'>
                        <div class = 'openn-left'>
                            <div class="openn-top">
                                <span onclick="addCard()"><i class="fa-solid fa-angles-left"></i></span>
                                <p>${item.marka} ${item.model}, ${item.il}, ${item.mator}, ${item.reng}</p>
                            </div>
                            <div class="openn-bottom">
                                <img src="${item.img}" alt="">
                            </div>
                        </div>
                        <div class = 'openn-right'>
                            <p>Qiymət: ${item.qiymet} AZN</p>
                            <div class = 'miniImg'>
                                <img src ="${item.img}">
                                <div class = 'mini-content'>
                                    <p>Autolux Azerbaijan - ${item.marka}</p>
                                    <p class = 'txtBoz'>Rəsmi nümayəndə</p>
                                </div>
                            </div>
                            <button class = 'opennBtn green'> <i class="fa-solid fa-phone"></i>  Zəng et</button>
                            <span>
                                There's Only One.
                                <p class = 'txtBoz'>${item.marka} avtomobillərinin Azərbaycanda rəsmi distribütoru Avtolüks Azərbaycan MMC-dir. 20% ilkin ödəniş, 10% illik bank faizi, 5 illik</p>
                            </span>
                            <button class = 'opennBtn blue'>Salona keç</button>
                        </div>
                    </div>`
}

let yeniElan = () => {
    const inp = document.querySelectorAll('.inpAdd')

    for (let i = 0; i < inp.length; i++) {
        if (inp[i].value === '') {
            window.alert('Bütün xanaları doldurun...!!')
            return
        }
    }
    txt.innerHTML = ''
    arr.push({
        id: arr.length + 1,
        marka: inp[0].value,
        model: inp[1].value,
        qiymet: inp[2].value,
        mator: inp[3].value,
        il: inp[4].value,
        reng: inp[5].value,
        img: inp[6].value
    })
    addCard()

    for (const i of inp) {
        i.value = ''
    }
}
    
let x = 0

const basket = document.getElementById('basket')
const sub = document.querySelector('sub')
let say = 0
const bosSebet = document.getElementById('bosSebet')

function checkBasket() {
    if (say == 0 ) bosSebet.innerHTML = 'Səbətə heç nə əlavə edilməyib.'
}


let basketArr = []

let buy = (img, marka, qiymet, id) => {
    bosSebet.innerHTML = ''
    say++
    sub.innerHTML = say
    x++

    basketArr.push({
        id: id,
        marka: marka,
        qiymet: qiymet,
        img: img
    })
    console.log(basketArr)

    basket.innerHTML += `<div class="basketCard" id="${id}">
                                    <div class="card-left"><img src = '${img}'></img></div>
                                    <div class="card-right">
                                        <span><b>Marka:</b> ${marka}</span>
                                        <span><b>Qiymət:</b> ${qiymet} AZN</span>
                                        <i onclick = "sil(this)" class="fa-solid fa-xmark delete"></i>
                                    </div>
                                </div>`
}

const inputs = document.querySelector('.inputs')
let ac = () => {
    inputs.style.height = '15vh'
}
let gizlet = () => {
    inputs.style.height = '0vh'
}

const sebetAdd = document.getElementById('sebetAdd')

let aciq = true

let sebetAc = () => {
    checkBasket()
    basket.style.opacity = aciq ? '1' : '0'
    basket.style.width = aciq ? '35vw' : '0px'
    basket.style.padding = aciq ? '10px 20px' : '0'
    aciq = !aciq
}

function sil(btnSil) {
    say--
    sub.innerHTML = say
    const cartId = btnSil.parentNode.parentNode.id
    let index = basketArr.findIndex(i => i.id == cartId)
    basketArr.splice(index, 1)
    console.log(basketArr);
    basket.innerHTML = ''

    for (const i of basketArr) {
        basket.innerHTML += `<div class="basketCard" id="${i.id}">
                                    <div class="card-left"><img src = '${i.img}'></img></div>
                                    <div class="card-right">
                                        <span><b>Marka:</b> ${i.marka}</span>
                                        <span><b>Qiymət:</b> ${i.qiymet} AZN</span>
                                        <i onclick = "sil(this)" class="fa-solid fa-xmark delete"></i>
                                    </div>
                                </div>`
    }

    if (say == 0) basket.innerHTML = 'Səbətə heç nə əlavə edilməyib.'
}

const search = document.getElementById('search')

let axtar = () => {
    txt.innerHTML = ''
    for (i of arr) {
        if (i.marka
            .toLocaleLowerCase()
            .includes(search.value.toLocaleLowerCase())) {
            txt.innerHTML += `<div class = 'card'>
                                <div class = 'card-body'>
                                    <div onclick = 'openn(${i.id})' class = 'card-top'><img src="${i.img}" alt=""></div>
                                    <div class = 'card-bottom'>
                                        <span class = 'qiymet'>${i.qiymet} AZN</span>
                                        <span>${i.marka} ${i.model}</span>
                                        <span>
                                            ${i.il}, ${i.mator} L, 
                                            <span style = 'color: ${i.reng}'>${i.reng}</span>
                                        </span>
                                        <div>
                                            <i onclick = "buy('${i.img}', '${i.marka} ${i.model}', '${i.qiymet}', '${i.id}')" class="fa-regular fa-heart"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>`
        }
    }
}
