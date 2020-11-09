let data = {
    src: "./images/a.png",
    title: "Vue.js",
    time:"Date.now",
  };
  var time = Date.now.toString();
let vm = new Vue({
    el: "#app",
    data: data,
  });