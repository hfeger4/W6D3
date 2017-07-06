const APIUtil = require("./api_util");
const Toggle = require("./follow_toggle");

class UsersSearch{
  constructor($el){
    this.$el = $el;
    this.input = this.$el.find("input");
    this.ul = this.$el.find("ul");

    this.$el.on('input', this.handleInput.bind(this));
  }

  handleInput(e) {
    APIUtil.searchUsers(this.input.val())
    .then((users) => (this.renderResults(users))
    );
  }

  renderResults(users) {
    this.ul.empty();
    users.forEach((el) => {
      this.ul.append(`<li>${el.username}</li>`);
      this.ul.append(`<button type="button" class="follow-toggle"></button>`);
      console.log(new Toggle($(el), {userId: el.id, followState: "followed"}));
    });
  }
}

module.exports = UsersSearch;
