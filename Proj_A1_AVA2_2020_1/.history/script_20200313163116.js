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
const c = url.get('email');
const c = url.get('dataNasc');
const c = url.get('sexo');
const c = url.get('estCivil');
const c = url.get('analise');
const c = url.get('bancoDados');
const c = url.get('desenvolvimento');
const c = url.get('engenhariaSoftware');
const c = url.get('redesComputadores');
console.log(c);