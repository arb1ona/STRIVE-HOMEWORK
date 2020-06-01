const url = "https://striveschool.herokuapp.com/api/product/";
const user = "user5";
const password = "9UVmQDaSPgxSuAds";
const headers = new Headers();
headers.set("Authorization", "Basic " + btoa(user + ":" + password));
headers.set("Content-Type", "application/json");

const getData = async () => {
  let response = await fetch(url, {
    headers,
  });
  return await response.json();
};

const getProduct = async (id) => {
  let response = await fetch(url + id, {
    headers,
  });
  return await response.json();
};

const saveProduct = async (product) => {
  let response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(product),
    headers: new Headers({
      "Content-Type": "application/json",
    }),
  });
  return response;
};

const editProduct = async (id, product) => {
  let response = await fetch(url + id, {
    method: "PUT",
    body: JSON.stringify(product),
    headers: new Headers({
      "Content-Type": "application/json",
    }),
  });
  return response;
};

const deleteProduct = async (id) => {
  let response = await fetch(url + id, {
    method: "DELETE",
    headers,
  });
  return response;
};

let arbiona = "girl";
arbiona = "woman";

console.log(arbiona);
