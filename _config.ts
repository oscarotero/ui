import lume from "lume/mod.ts";
import postcss from "lume/plugins/postcss.ts";

const site = lume({
  location: new URL("https://oscarotero.github.io/ui/"),
});

site.use(postcss());
site.ignore("README.md");
site.copy([".html"]);

export default site;
