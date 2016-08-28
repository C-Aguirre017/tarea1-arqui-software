import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const RequestModel = new Mongo.Collection('requests');

RequestModel.schema = new SimpleSchema({
  ip: {
    label: 'IP',
    type: String,
  },
  userAgent: {
    label: 'User Agent',
    type: String
  },
  created_at: {
    label: 'Date',
    type: Date,
    defaultValue: new Date
  }
});

//Get IP Address
const SHOW_NUMBER = 10;
if (Meteor.isServer) {
  Meteor.onConnection(function(conn) {
      const ip = conn.clientAddress;
      const userAgent = conn.httpHeaders['user-agent'];
      Meteor.call('requests.insert',String(ip),String(userAgent));
  });

  Meteor.publish('requests', function requestsPublication() {
    return RequestModel.find({},{sort: {created_at: -1}, limit: SHOW_NUMBER});
  });
}

Meteor.methods({
  'requests.insert' (ip, userAgent) {
    check(ip,String);
    check(userAgent,String);

    RequestModel.insert({
      ip: ip,
      userAgent: userAgent,
      created_at: new Date()
    });
  }
});
