/*
 *   @project     A1_AVA2_UVA_2020_1
 *   @author      Mário Jorge (mariojgmaster@yahoo.com.br)
 *   @Git         MJRibeiroTriscal (https://github.com/mjRibeiroTriscal)
 */

var url_string = window.location.href
console.log(url_string)
var url = new URLSearchParams(url_string)
console.log(url)
var c = urlParams.get("name")
console.log(c)