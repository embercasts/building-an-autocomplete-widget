App = Ember.Application.create();

Ember.Handlebars.registerBoundHelper('highlight', function(searchResult, searchText) {
  var regexp, strong;

  regexp = new RegExp(searchText, 'i');
  strong = '<strong>' + searchText + '</strong>';

  return new Handlebars.SafeString(searchResult.replace(regexp, strong));
});

App.AutocompleteController = Ember.Controller.extend({
  searchText: null,

  searchResults: function() {
    var searchText = this.get('searchText');
    if (!searchText) { return; }

    var regex = new RegExp(searchText, 'i');
    return [{name: 'one'}, {name: 'two'}, {name:'three'}].filter(function(item) {
      return item.name.match(regex);
    });
  }.property('searchText')
});
