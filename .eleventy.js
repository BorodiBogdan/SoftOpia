const { DateTime } = require("luxon");

module.exports = function(eleventyConfig){

    eleventyConfig.addPassthroughCopy('./src/css');
    eleventyConfig.addPassthroughCopy('./src/js');
    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/photos');
    eleventyConfig.addPassthroughCopy('./src/admin');
    eleventyConfig.addPassthroughCopy('./src/ImperialConstruct');
    eleventyConfig.addPassthroughCopy('./src/SimplyConstruct');
    eleventyConfig.addPassthroughCopy('./src/CocktailsCrazyness');
    eleventyConfig.addPassthroughCopy('./src/constructed');
    eleventyConfig.addPassthroughCopy('./src/projects.html');
    eleventyConfig.addPassthroughCopy('./src/atlantis');

    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    })


    return {
        dir: {
            input : "src",
            output : "public"
        }
    };   
}
