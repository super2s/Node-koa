
    new Vue({
        el: '#cartproduct',
        data: {
            items: [
                {
                    id: 0,
                    img: 'image/O1CN017o4wHQ24Nd7zFHwFo_!!2-item_pic.png_80x80.png',
                    name: '【99划算价】Midea/美的 KFR-26GW/VVN8B1E 大1匹 一级变频静音家用',
                    oldPrice: 3899.00,
                    price: 3299.00, 
                    quantityt: 1,
                    select: false,
                },
                {
                    id: 1, 
                    img: 'image/O1CN01gG8oE924Nd7wP8omR_!!2-item_pic.png_80x80.png',
                    name: '【99划算价】Midea/美的 大1.5匹变频家用空调挂机 壁挂式 KFR-35GW/WCBN8A3@',
                    oldPrice: 2999.00, 
                    price: 2299.00, 
                    quantityt: 1,
                    select: false,
                },
                {
                    id: 2,
                    img: 'image/O1CN01gaRPSM1cOipWGFR3t_!!0-item_pic.jpg_80x80.jpg',
                    name: '【99划算价】Midea/美的 大1匹变频冷暖壁挂式家用空调挂机 KFR-', 
                    oldPrice: 3099.00, 
                    price: 1999.00, 
                    quantityt: 1,
                    select: false,
                }
            ]
        },
        methods: {
            //全选和取消全选
            selectAllProduct: function (isSelect) {
                for (var i = 0; i < this.items.length; i++){
                    this.items[i].select = !isSelect;
                }
            },
            deleteProduct: function () {
                this.items =this.items.filter( function (item) { return !item.select } )
            },
            deleteOneProduct: function (index) {
                //根据索引删除productList的记录
                this.items.splice(index,1);
            },
            less: function (index){
                this.items[index].quantityt--;
                if(this.items[index].quantityt <= 0){
                    this.items[index].quantityt = 1;
                }
            },  
        },
        computed: {
            // 检测是否全选
            isSelectAll:function(){
                //如果productList中每一条数据的select都为true,就返回true,否则返回false
                return this.items.every( function (val) { return val.select })             
            },
            settlement: function () {
                if(this.totalPrice == 0)  return true; 
                else return false;
            },

            totalPrice: {
                get: function () {
                    var productList = this.items.filter(function (val) { return val.select });
                    var totalPrice = 0;
                    for (var i = 0; i < productList.length; i++){
                        totalPrice +=productList[i].price * productList[i].quantityt;
                    }
                    return totalPrice;
                }
            },
            all: {
                get: function () {
                    return this.items.length;
                }
            },
            selectedProduct: {
                get: function () {
                    return this.items.filter(function (val) { return val.select }).length;
                }
            }
        }
    })
