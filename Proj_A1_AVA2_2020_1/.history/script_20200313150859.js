/*
 *   @project     A1_AVA2_UVA_2020_1
 *   @author      Mário Jorge (mariojgmaster@yahoo.com.br)
 *   @Git         MJRibeiroTriscal (https://github.com/mjRibeiroTriscal)
 */

var url_string = window.location.href
var url = new URL(url_string);
var c = url.searchParams.get("c");
console.log(c);