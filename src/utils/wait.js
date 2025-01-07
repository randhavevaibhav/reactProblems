//func for simulating server delay
export default function wait(delay = 600) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('resloved !!');
    }, delay);
  });
}
