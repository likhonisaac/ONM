// JS
const loadHtmlFile = (fileName, containerId) => {
  fetch(fileName).then(function (response) {
    return response.text();
  }).then(function (html) {
    containerId.innerHTML = html;
  }).catch(function (err) {
    console.warn('Something went wrong.', err);
  });
}

loadHtmlFile("test1.html", container)