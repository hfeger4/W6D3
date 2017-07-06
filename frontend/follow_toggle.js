const APIUtil = require("./api_util");

class FollowToggle {
  constructor($el, options){
    this.$el = $el;
    this.userId = this.$el.attr("data-user-id") || options.userId;
    this.followState = this.$el.attr("data-initial-follow-state") || options.followState;
    this.render();
    this.$el.click((e) => {
      this.handleClick(e);

    });

  }

  render(){
    this.$el.prop("disabled", false);
    if (this.followState === "unfollowed"){
      this.$el.html("Follow!");
    }else if (this.followState === "followed"){
      this.$el.html("Unfollow!");
    } else if (this.followState === "following") {
      this.$el.html("Following...");
      this.$el.prop("disabled", true);
    } else {
      this.$el.html("Unfollowing...");
      this.$el.prop("disabled", true);
    }
  }

  handleClick(e){
    e.preventDefault();
    if (this.followState === "unfollowed") {
      this.$el.attr("data-initial-follow-state", "following");
      this.followState = "following";
      this.render();
      APIUtil.followUser(this.userId)
      .then(() => {
        this.$el.attr("data-initial-follow-state", "followed");
        this.followState = "followed";
        this.render();
      });
    } else {
      this.$el.attr("data-initial-follow-state", "unfollowing");
      this.followState = "unfollowing";
      this.render();
      APIUtil.unfollowUser(this.userId)
      .then(() => {
        this.$el.attr("data-initial-follow-state", "unfollowed");
        this.followState = "unfollowed";
        this.render();
      });
  }
 }
}




module.exports = FollowToggle;
