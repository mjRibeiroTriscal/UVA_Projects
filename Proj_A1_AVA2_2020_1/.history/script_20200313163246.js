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
const d = url.get('email');
const e = url.get('dataNasc');
const f = url.get('sexo');
const g = url.get('estCivil');
const h = url.get('analise');
const i = url.get('bancoDados');
const j = url.get('desenvolvimento');
const k = url.get('engenhariaSoftware');
const l = url.get('redesComputadores');
console.log('nome' + c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(h);
console.log(i);
console.log(j);
console.log(k);
console.log(l);