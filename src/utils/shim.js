const { location } = window;

(function () {
  /* eslint-disable */ 
  if(!location.origin){
    location.origin = location.protocol + '//' + location.host;
  }
  
	if(void 0 === Array.prototype.find){
		Array.prototype.find = function(iterator){
			let length = this.length;
			for(let i = 0;i < length;i++){
				if(true === iterator(this[i], i)){return this[i]}
			}
			return null;
		}
	}

	if(void 0 === Array.prototype.includes){
		Array.prototype.includes = function(searchElement, fromIndex = 0){
			if(fromIndex < 0){
				fromIndex += this.length;
			}
			let length = this.length;
			for(let i = fromIndex;i < length;i++){
				if(searchElement === this[i]){
					return true;
				}
			}
			return false;
		}
  }
  
  if(void 0 === Array.prototype.findIndex){
		Array.prototype.findIndex = function(iterator){
			let length = this.length;
			for(let i = 0;i < length;i++){
				if(true === iterator(this[i], i)){return i}
			}
			return -1;
		}
	}

	if(void 0 === Object.values){
		Object.values = function(target){
			return Object.keys(target).map(key => target[key]);
		}
	}
})();