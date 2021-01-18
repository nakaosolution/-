var app = new Vue({
	el:'#app',
  data: {
  	bpi: null,
    hasError: false,
    loading: true
  },
  mounted: function() {
    // APIよりJSONを取得しbpiに代入、エラーがあればエラー表示、ロードするまではローディング表示。
  	axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(function(response){
        // console.log(response.data.bpi)
        // console.log(response.data.bpi.USD.rate_float)
        this.bpi = response.data.bpi
      }.bind(this)) //bind(this)がない場合thisはWindowsオブジェクトを意味する。bind(this)を指定するとVueインスタンスを意味する。
      .catch(function(error){
      	//console.log(error)
        this.hasError =true
      }.bind(this))
      .finally(function(){
      	this.loading = false
      }.bind(this))
  },
  filters: {
    // 小数点2桁まで表示
  	currencyDecimal(value) {
    	return value.toFixed(2)
    }
  }
})