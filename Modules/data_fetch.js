let xlabels = [];
let ylabels = [];

export default async function getData() {

  try {
    const response = await fetch('ZonAnn.Ts+dSST.csv');
    const data = await response.text();
    
    const rows = data.split('\n').slice(1);
    rows.forEach(elt => {
      const row = elt.split(',');
      const year = row[0];
      xlabels.push(year)
      const temp = row[1];
      ylabels.push(parseFloat(temp) + 14);
    })
  }

  catch (error) {
    console.log(error);
  }
}
console.log(ylabels)
export {xlabels, ylabels};