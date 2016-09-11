// Write your package code here!

// Variables exported by this module can be imported by other packages and
// applications. See txmdiscovery-tests.js for an example of importing.
export const name = 'txmdiscovery';
TxmDiscovery={
  settings:{
    num: 3,
    desTitle: ["title1","title2","title3",""],
    desContent: ["description1","description2","description3",""],
    desPic: ["teacher.png","cv.png","exchange.png",""]
  },
  config: function(hash){
    return this.settings = $.extend(true,this.settings,hash);
  },
  show: function(){
    Modal.show("Discovery");
  },
  hide: function(){
    Modal.hide();
  }
};
