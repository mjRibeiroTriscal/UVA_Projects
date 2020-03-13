/*
 *   @project     A1_AVA2_UVA_2020_1
 *   @author      Mário Jorge (mariojgmaster@yahoo.com.br)
 *   @Git         MJRibeiroTriscal (https://github.com/mjRibeiroTriscal)
 */

const url_string = window.location.search;
const url = new URLSearchParams(url_string);

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

console.log(document.getElementById('nome'))
document.getElementById('email').innerHTML = d
document.getElementById('dataNasc').innerHTML = e
document.getElementById('sexo').innerHTML = f
document.getElementById('estCivil').innerHTML = g
document.getElementById('areasInteresse').innerHTML = h

console.log('nome >>> ' + c);
console.log('email >>> ' + d);
console.log('dataNasc >>> ' + e);
console.log('sexo >>> ' + f);
console.log('estCivil >>> ' + g);
console.log('analise >>> ' + h);
console.log('bancoDados >>> ' + i);
console.log('desenvolvimento >>> ' + j);
console.log('engenhariaSoftware >>> ' + k);
console.log('redesComputadores >>> ' + l);