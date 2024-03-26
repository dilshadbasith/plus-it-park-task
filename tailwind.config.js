const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'bgimage': "url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fapi&psig=AOvVaw2r-YxvTPphlCyijyKGr694&ust=1711460716330000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKDr4LftkIUDFQAAAAAdAAAAABAE')",
      }
    },
  },
  plugins: [],
});