//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (rna) => {
   return [...rna].map(x=>(x=="C")?(x="G"):(x=="G")?(x="C"):(x=="T")?(x="A"):(x="U")).join("");
  };
