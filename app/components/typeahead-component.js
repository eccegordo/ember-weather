import getJSON from "appkit/utils/get-json";

export default Ember.Component.extend({
  classNames: 'search',

  setUpTypeahead: function() {
    var typeahead = this.$('input').typeahead({
      name: 'searchTerm',
      valueKey: 'name',
      limit: 10,
      remote: '/api/search/%QUERY'
    });

    var self = this;

    typeahead.on("typeahead:initialized", function(event, prefetchedData) {
      Ember.run(function () {
        self.$('input').focus();
      });
    });

    typeahead.on("typeahead:selected", function(event, location) {
      Ember.run(function () {
        self.sendAction("transitionToLocation", Ember.String.parameterize(location.name));
      });
    });

    typeahead.on("typeahead:autocompleted", function(event, location) {
      Ember.run(function () {
        self.sendAction("transitionToLocation", Ember.String.parameterize(location.name));
      });
    });
  }.on('didInsertElement')

});
