/**
 * An example struct/model builder for use with the webcore MVC architecture.
 * Invoke create() to build a Person model populated with the provided values.
 * Note the use of ES5 getters (and setters) as opposed to a custom prototype.
 * For some implementations this could be built out to use the module pattern.
 *
 * @param {String} firstName
 * @param {String} lastName
 */
module.exports.create = function Person(firstName, lastName) {
   'use strict';

   firstName || (firstName = '');
   lastName  || (lastName  = '');

   return {
       firstName: firstName,
       lastName : lastName,

       get fullName() {
           var name = this.firstName + ' ' + this.lastName;
           return name.replace(/^\s+|\s+$/g, '');
       }
   };
};
