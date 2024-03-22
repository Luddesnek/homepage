let links = document.getElementById("links")

function parseJson(json) {
   for (let i = 0; i < json.links.length; i++) {
      let linkObj = json.links[i]
      console.log(linkObj)

      let li = document.createElement("li")
      let a = document.createElement("a")

      a.href = linkObj.url
      a.innerText = linkObj.text
      li.append(a)

      links.append(li)

   }
}

function populateList() {
   let xhr = new XMLHttpRequest()

   xhr.onload = function () {
      let json = JSON.parse(xhr.responseText)

      parseJson(json)
   }

   xhr.open("GET", "files/links.json")
   xhr.send();
}

async function populateListFetch() {
   let response = await fetch("files/links.json")
   let json = await response.json();

   parseJson(json);
}

async function summonMelon(event) {
   // img.src = "files/melon.webp"


   let melon = await fetch("files/melon.webp")
   let blob = await melon.blob();

   let url = URL.createObjectURL(blob)

   let img = document.createElement("img")
   img.src = url

   document.body.append(img)

   // console.log(await melon.text())

}

let melonButton = document.getElementById("melon")

melonButton.addEventListener("click", summonMelon)
document.body.addEventListener("keypress", summonMelon)

//populateList()
populateListFetch()