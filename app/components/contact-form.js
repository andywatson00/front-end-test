import Ember from 'ember';
import raw from 'ic-ajax';

export default Ember.Component.extend({
  contactName: '',
  contactEmail: '',
  contactMessage: '',
   actions: {
     postMessage()
     {
       var rx = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
      if(this.get('contactName') === '')
      {
        this.set('responseMessage', `You must enter a contact name!`);
      }
      else if(this.get('contactEmail') === '' || !rx.test(this.get('contactEmail')))
      {
        this.set('responseMessage', `You must enter a valid email!`);
      }
      else if(this.get('contactMessage') === '')
      {
        this.set('responseMessage', `You must enter a message!`);
      }
      else
      {
        raw({
          url:      '/posts/create',
          type:     'POST',
          dataType: 'json',
          data:     { 'contactName': this.get('contactName'), 'contactEmail': this.get('contactEmail'), 'contactMessage': this.get('contactMessage') }
        }).then((response) => {
          console.log('Success: '+response.message);
          this.set('responseMessage', response.message);
          this.set('contactName', '');
          this.set('contactEmail', '');
          this.set('contactMessage', '');
        }, (response) => {
          console.log('Failed: '+response.message);
          this.set('responseMessage', response.message);
        });
      }
     }
   }
});
