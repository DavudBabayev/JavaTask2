function hesablaYanacaq(mesafe, zaman) {
    const ortalamaSuret = mesafe / zaman;

    let serfiyyat;
    if (ortalamaSuret >= 0 && ortalamaSuret < 60) {
        serfiyyat = 6;
    }
    else if (ortalamaSuret >= 60 && ortalamaSuret < 90) {
        serfiyyat = 9;
    } 
    else if (ortalamaSuret >= 90 && ortalamaSuret < 120) {
        serfiyyat = 8;
    } 
    else {
        serfiyyat = 10;
    }

    const yanacaqMiqdari = (mesafe / 100) * serfiyyat;

    const cixis = `${mesafe} km yolu ${zaman} saat muddetine getmek ucun, sizin ortalama suretiniz ${ortalamaSuret} km/saat olmalidir. Size lazim olacaq yanacaq miqdari ${yanacaqMiqdari.toFixed(2)} litr, ortalama yanacaq serfiyyati ise ${serfiyyat} l/100 km olacaq.`;

    return cixis;
}

const cixisStringi = hesablaYanacaq(150, 2);
console.log(cixisStringi);