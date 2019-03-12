Vue.component('product', {
        template:`
            <div class="product">
            <div class="row">
                    <div class="col-sm-6">
                <div class="product-image">
                    <img :src="image"/>
                </div>
                    </div>

                    <div class="col-sm-6">
                        <div class="product-info">
                            <h1>{{title}}</h1>
                            <a :href="link" target="_blank">To the shop</a>
                            <p v-if="inventory > 10" >In Stock</p>
                            <p v-else-if="inventory <= 10 && inventory > 0">Almost sold out!</p>
                            <p v-else :class="{ outOfStock: !onSale }"   >Out of Stock</p>
                            <span v-if="onSale">On Sale!</span>
                            <ul>
                                <li v-for="detail in details">{{detail}}</li>
                            </ul>
                            <ul>
                            <li v-for="size in sizes">{{size}}</li>
                            </ul> 

                            <div v-for="variant in variants" 
                                :key="variant.variantId"
                                class="colorBox"
                                :style="{backgroundColor:variant.variantColor}"
                                @mouseover="updateProduct(variant.variantImage)"
                                >
                            </div>
                            <button v-on:click="addToCart"
                                    :disable="onSale"
                                    :class="{disableButton:!onSale} "
                            >Add to cart</button>
                            <button v-on:click="deleteItem" class="btn-remove">Remove item</button>
                            <div class="cart">
                                <p>Cart({{cart}})</p>
                            </div>        
                    </div>
                </div>
            </div>
        </div>

        `,
        data (){
            return {
            product: "Socks",
            brand: "Vue & Vue",
            image: "./images/socks1.jpg",
            link: "https://www.paulsmith.com/uk/mens/accessories/socks",
            inventory: 8,
            onSale: false,
            details:["Cotton","Made in UK","Bio"],
            sizes:["XL","L","M","S"],
            variants: [
                {
                variantId: 2234,
                variantColor: 'green',
                variantImage: './images/socks2.jpg',
                },
                {
                variantId: 2235,
                variantColor: 'blue',
                variantImage: './images/socks3.jpg',
                }
            ],
            cart:0,
        }
        },
        methods: {
            addToCart: function() {
                this.cart += 1
            },
    
            updateProduct(variantImage) {
                this.image = variantImage
            },
    
            deleteItem: function() {
                this.cart -= 1
            }
        },
        computed: {
            title() {
                return this.brand + " " + this.product
            }
        }



}) 



var app = new Vue({
    el:"#app"
})