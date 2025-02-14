// 1
const movie = {
  id: 1,
  title: "Big Hero 6",
  image:
    "https://th.bing.com/th/id/OIP.mS-_buaDYnzfEtmcG1Z7UQHaLH?rs=1&pid=ImgDetMain",
  genre: "adventure",
  cast: [
    {
      name: "Hiro Hamada",
      role: "ahli teknologi",
    },
    {
      name: "Baymax",
      role: "robot perawatan kesehatan",
    },
    {
      name: "Go Go Tomago",
      role: "ahli fisika",
    },
    {
      name: "Honey Lemon",
      role: "ahli kimia",
    },
    {
      name: "Wasabi",
      role: "ahli dalam teknologi laser",
    },
  ],
  getTittleImgAndGenre: function () {
    console.log("title = " + this.title);
    console.log("image = " + this.image);
    console.log("genre = " + this.genre);
  },
  getCast() {
    const cast = this.cast.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    console.log(cast);
  },
  settMovieTitle: function (newTitle) {
    if (typeof newTitle !== "string") return;
    this.title = newTitle;
    console.log(this.title);
  },
  setMovieImage: function (newImage) {
    if (typeof newImage !== "string") return;
    this.image = newImage;
    console.log(this.image);
  },
};

movie.getTittleImgAndGenre();
movie.getCast();
movie.settMovieTitle("Big Hero 7");
movie.setMovieImage(
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Big_Hero_6_logo.svg/320px-Big_Hero_6_logo.svg.png"
);
