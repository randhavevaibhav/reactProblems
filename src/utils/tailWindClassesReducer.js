import pkg from "lodash";
const { merge } = pkg;
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

  console.log("tailwindClasses ===> ",tailwindClasses)
  const formattedDefaultClasses = reduceToClassObj(defaultTailwindClasses);
  const formattedTailWindClasses = reduceToClassObj(tailwindClasses);


  const formattedClassStr = Object.values({
    ...formattedDefaultClasses,
    ...formattedTailWindClasses,
  }).join(" ");
console.log("formattedClassStr ===> ",formattedClassStr)
  return formattedClassStr;
};

// testing ==>

// const defaultTailwindClasses = [
//     "rounded-sm",
//     "border",
//     "border-gray-300",
//     "shadow"
//   ];

//   const tailwindClasses = ["flex","rounded-lg","p-5","felx-col"]
// console.log(reduceToClassObjString(defaultTailwindClasses,tailwindClasses))


// const defaultStyles = {
//   "rounded-sm": "rounded-sm",
//   "border": "border",
//   "border-gray-300": "border-gray-300",
//   "shadow": "shadow",
//   "w-full": "w-full",
//   "p-3": "p-3",
//   "flex":"flex"
// }

// const mergedStyles = merge({...defaultStyles,...{"rounded-md":"rounded-md","flex-col":"flex-col","p-5":"p-5"}});
// console.log("mergedStyles ===> ",mergedStyles)