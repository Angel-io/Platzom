export default function platzom(str) {
  let translation = str;
  const length = translation.length;
  //Termina en "ar", se quitan estas dos letras
  if (str.toLowerCase().endsWith("ar")){
    translation = str.slice(0, -2);
  }
  //Si la palabra inicia con Z, se le añade "pe" al final
  if (str.toLowerCase().startsWith("z")){
    translation += "pe";
  }
  //Si la palabra traducida tiene 10 o más letras,
  //se debe partir a la mitad  y unir con un guión en la mitad
  if (length >= 10) {
    const firstHalf = translation.slice(0, Math.round(length / 2));
    const secondHalf = translation.slice(Math.round(length /2));
    translation = firstHalf + "-" + secondHalf;
  }
  //Si la palabra original es un palíndromo, ninguna regla anterior cuenta
  //y se devuelve la misma palabra intercalando mayúsculas y minúsculas
  if (str.toLowerCase() == reverse(str)){
    return minMay(str);
  }
  return translation;
}

function reverse(str) {
  const translation = str.toLowerCase().split("").reverse().join("");
  return translation;
}
function minMay(str) {
  const length = str.length;
  let translation = "";
  let capitalize = true;
  for (let i = 0; i < length; i++) {
    const char = str.charAt(i);
    translation += capitalize ? char.toUpperCase() : char.toLowerCase();
    capitalize = !capitalize;
  }
  return translation;
}
