let apiKey = "6a237dcc19624d0b86c89d9d8c477209";

async function apiCalling(ingredient) {
  let api = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=${ingredient}&number=16`;
  try {
    let result = await fetch(api);
    if (!result.ok) throw new Error("Failed to fetch recipes");
    let data = await result.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error during API call:", error);
  }
}

let btn = document.querySelector(".btn");
let inp = document.querySelector("input");

let titles = document.querySelector(".h3");
let image = document.querySelector(".img");

let main_container = document.querySelector(".main-container");
btn.addEventListener("click", async () => {
  // Clear the contents of main_container before adding new results
  main_container.innerHTML = "";

  let arr = await apiCalling(inp.value);

  for (const array of arr) {
    let div = document.createElement("div");
    div.classList.add("container");
    let img = document.createElement("img");
    img.classList.add("img");
    let h3 = document.createElement("h3");
    main_container.append(div);
    div.append(img, h3);

    console.log(array.title);
    img.setAttribute("src", array.image);
    h3.innerHTML = array.title;
  }
});
