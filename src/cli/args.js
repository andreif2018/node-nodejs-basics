export const parseArgs = () => {
    const propNames = [];
    const propValues = [];
    const result = [];
    let firstParam;
    process.argv.forEach((item, index) => {
      if (item.startsWith('--')) {
        propNames.push(item);
        if (!firstParam) firstParam = index;
      }
    });
    process.argv.slice(firstParam).forEach((item) => {
      if (!item.startsWith('--')) {
        propValues.push(item);
      }
    });
    propNames.forEach((item, index) => {
      result.push(`${item.slice(2)} is ${propValues[index]}`);
    })
    console.log(result.join(', '));
  };

  parseArgs();