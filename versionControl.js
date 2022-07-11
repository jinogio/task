function versionContol(a, b) {
    let convertA = a.split(".");
    let convertb = b.split(".");
    const loop =
        convertA.length > convertb.length ? convertA.length : convertb.length;
    for (let i = 0; i < loop; i++) {
        if (Number(convertA[i] || 0) > Number(convertb[i] || 0)) {
            return true;
        }
    }
    return false;
}
console.log(versionContol("1.2.06.0055", "2.2.6.55"));
console.log(versionContol("2.2.0055", "2.2"));