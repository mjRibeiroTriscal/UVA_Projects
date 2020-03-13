/*
 *   @project     A1_AVA2_UVA_2020_1
 *   @author      Mário Jorge (mariojgmaster@yahoo.com.br)
 *   @Git         MJRibeiroTriscal (https://github.com/mjRibeiroTriscal)
 */

const url_string = window.location.search;
console.log(url_string);
const url = new URLSearchParams(url_string);
console.log(url);
const c = url.get('nome');
console.log(c);