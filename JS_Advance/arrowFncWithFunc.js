var a  = {
    name: 'Long',
    run: function(){
        {
            console.log(this.name)
        }
    }
};
a.run();

var a2 = {
    foo: 'bar',
    run: function() {
        setTimeout(() => { // nếu đây là func bth thì undefine. Dùng bind or arrowFnc or biến var để khắc phục
            console.log(this.foo); // this này là của hàm run
        },1000)
    }
};
a2.run();