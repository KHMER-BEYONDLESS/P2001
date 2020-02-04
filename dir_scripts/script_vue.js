
const vueApp = new Vue({

  el: '#vapp',
  data: { 
   currentComponent: null,
   componentsArray : ['home','page1','page2','page3','page4','aboutus']
  },
  components: {
  	'home': {
  		template : '<div class="home">Home</div>'
  	},
  	'page1': {
  		template : '<div class="page1">page1</div>'
  	},
  	'page2': {
  		template : '<div class="page1">page2</div>'
  	},
  	'page3': {
  		template : '<div class="page1">page3</div>'
  	},
  	'page4': {
  		template : '<div class="page1">page4</div>'
  	},
  	'aboutus': {
  		template : '<div class="page1">about us</div>'
  	},
  	methods : {
  		swapComponent : function(component) {
  			this.currentComponent = component;
  		}
  	}
  }
})