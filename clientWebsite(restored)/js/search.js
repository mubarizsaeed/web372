const Search = {
  init: function() {
    this.input = $(".search-box input");
    this.bindEvents();
  },
  bindEvents: function() {
    const self = this;
    this.input.on("keyup", function() {
      self.performSearch();
    });
  },
  performSearch: function() {
    const searchValue = this.input.val().trim().toLowerCase();
    // Update the images collection each time a search is performed
    this.images = $(".image-box");
    this.images.each(function() {
      const imageName = $(this).data('name').toLowerCase();
      if (imageName.includes(searchValue)) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  }
};

$(document).ready(function() {
  Search.init();
});
