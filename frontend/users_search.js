const APIUtil = require("./api_util");

class UsersSearch{
  constructor($el){
    this.$el = $el;
    this.input = this.$el.children("input");
    this.ul = this.$el.children("ul");
    // this.checkStuff();
  }

  // checkStuff() {
  //   console.log(this.$el);
  //   console.log(1, this.input, this.ul, this.input.val());
  // }

  handleInput() {
    APIUtil.searchUsers(this.input.val());
  }
}

module.exports = UsersSearch;
