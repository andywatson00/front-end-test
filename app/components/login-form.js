import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Component.extend({
  session: service('session'),

  actions: {
    authenticateWithFacebook() {
      var _this = this;
      this.get('session').authenticate('authenticator:torii', 'facebook').then(() => {
        //alert('Success! ' + _this.get('session.token'));
      }, (err) => {
        alert('Error obtaining access token: ' + err.responseText);
      });
    }
  }
});
