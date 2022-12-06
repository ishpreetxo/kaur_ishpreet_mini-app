export default {
    name: 'TheLightboxComponent',

    props: ['car'],

    template: `

    <section class="lightbox">
    <div class="container1">
    <div class="closeicon">
    <img @click="closeLB" src="images/closeicon.png" class="lightbox_close">
</div>
      
        <div class="image">
            <img class="mini_image2" :src='"images/" + car.model_image2' alt="mini_cooper.jpg">
        </div>
        <div class="text">
            <h2 class="lb_heading">{{ car.model_name }}</h2>
            <p class="infocars"> {{ car.info }}</p>
            <div class="line"></div>
            <div class="speed">
                <h2>Top Speed</h2>
            </div>
         
            <p class="car_speed">{{ car.Top_Speed }}</p>
        </div>
    </div>
</section>

    `,

    methods: {
        closeLB() {
            this.$emit('closelb');
        }
    }
}