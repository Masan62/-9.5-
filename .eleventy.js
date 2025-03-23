module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("scripts");

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }
  };
};
