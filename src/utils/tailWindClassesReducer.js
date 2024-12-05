const reduceToClassObj = (arr = []) => {
  let classObj = {};
  classObj = arr.reduce((obj, value) => {
  
    let key = "";
    if (value.split("-").length > 2) {
      key = value.split("-").slice(0, 2).join("-");
    } else {
      key = value.split("-")[0];
    }

    obj[key] = value;
    return obj;
  }, {});

  return classObj;
};

export const reduceToClassObjString = (
  defaultTailwindClasses = [],
  tailwindClasses = []
) => {
  const formattedDefaultClasses = reduceToClassObj(defaultTailwindClasses);
  const formattedTailWindClasses = reduceToClassObj(tailwindClasses);


  const formattedClassStr = Object.values({
    ...formattedDefaultClasses,
    ...formattedTailWindClasses,
  }).join(" ");

  return formattedClassStr;
};

// testing ==>

const defaultTailwindClasses = [
    "rounded-sm",
    "border",
    "border-gray-300",
    "shadow"
  ];

  const tailwindClasses = ["flex","rounded-lg","p-5","felx-col"]
console.log(reduceToClassObjString(defaultTailwindClasses,tailwindClasses))