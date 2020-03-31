//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = ([x,y,z]) => {
  const colors = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];
  return (Number(`${colors.indexOf(x)}${colors.indexOf(y)}`));
};
