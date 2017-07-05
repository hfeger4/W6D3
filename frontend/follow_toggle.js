const APIUtil = require("./api_util");

class FollowToggle {
  constructor($el){
    this.$el = $el;
    this.userId = this.$el.attr("data-user-id");
    this.followState = this.$el.attr("data-initial-follow-state");
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
    }else{
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
