App = Ember.Application.create();

App.AutocompleteController = Ember.Controller.extend({
  searchText: null,

  searchResults: function() {
    var searchText = this.get('searchText');
    if (!searchText) { return; }

    var regex = new RegExp(searchText, 'i');
    return ['one', 'two', 'three'].filter(function(name) {
      return name.match(regex);
    });
  }.property('searchText')
});