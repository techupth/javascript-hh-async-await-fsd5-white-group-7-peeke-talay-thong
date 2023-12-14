// Exercise #6
let getJohnProfile = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve({
          name: "John",
          age: 20,
          hobbies: ["Coding", "Football"],
        }),
      1000
    );
  });
};

let getJohnOrders = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve([
          {
            orderId: "001",
            items: ["apple", "banana"],
          },
          {
            orderId: "002",
            items: ["orange", "itim"],
          },
        ]),
      1500
    );
  });
};

// Start coding here
let fetchJohnData = async () => {
  try {
    let displayProfile = await getJohnProfile();
    console.log(displayProfile);
    let displayOrder = await getJohnOrders();
    console.log(displayOrder);
  } catch (error) {
    console.log(error);
  }
};

fetchJohnData();
