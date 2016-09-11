/**
 * Created by nuonuo-jtl on 11/09/16.
 */

var index;
Template.Discovery.events({
  'click .btn-next': function(){
    index.set(index.get()+1);
  },
  'click .btn-close':function(){
    Modal.hide();
  },
  'click .btn-back':function(){
    index.set(index.get()-1);
  }
});
Template.Discovery.helpers({
  index: function(){
    return index.get()%(TxmDiscovery.settings.num-1);
  },
  numClose: function(){
    return (TxmDiscovery.settings.num-1)!=index.get()
  },
  desTitle: function(){
    return TxmDiscovery.settings.desTitle[index.get()%TxmDiscovery.settings.num]
  },
  desContent: function(){
    return TxmDiscovery.settings.desContent[index.get()%TxmDiscovery.settings.num]
  },
  desPic: function(){
    return TxmDiscovery.settings.desPic[index.get()%TxmDiscovery.settings.num]
  }
});
Template.Discovery.onCreated(function(){
  index = new ReactiveVar(0);
});
