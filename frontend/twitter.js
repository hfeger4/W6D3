const Toggle = require("./follow_toggle");
const Search = require("./users_search");
$( () => {
  $("button.follow-toggle").each(function(i, el){
    new Toggle($(el));
  });
  $("nav.users-search").each(function(i,el){
    new Search($(el));
  });
});
