const APIUtil = {
  followUser: id => (
    $.ajax({
      url: `/users/${id}/follow`,
      type: 'POST',
      dataType: 'JSON'
    })
  ),

  unfollowUser: id => (
    $.ajax({
      url: `/users/${id}/follow`,
      type: 'DELETE',
      dataType: 'JSON'
    })
  ),

  searchUsers: (queryVal, success) => (
    $.ajax({
      url: `/users/search`,
      type: 'GET',
      dataType: 'JSON',
      data: {
        query: queryVal
      },
      success: success
    })
  )
};

module.exports = APIUtil;
