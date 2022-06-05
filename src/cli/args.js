export const parseArgs = () => {
  const args = process.argv;
  const result = [];

  args.reduce((propName, propValue, index) => {
    if (index % 2 === 0) {
      return propValue;
    } else {
      const prettyPropName = propName.startsWith("--")
        ? propName.slice(2)
        : propName;
      result.push(`${prettyPropName} is ${propValue}`);
      return null;
    }
  }, null);
  console.log(result);
};

parseArgs();
