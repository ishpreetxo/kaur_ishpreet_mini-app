export default {
    name: "minidisplay",

    emits: ['openlb'],

    props: {
        car: Object
    },

    template: `
    <li @click="loadcarData">
    <div class="mini_cars">
        <img class = "mini_image" :src='"images/" + car.model_image' alt="mini_cooper.jpg">
    </div>
    </li>
    `,

    methods: {
        loadcarData() {
            // pass the indvidual car object back to thhe main vw instance 
            this.$emit('openlb', this.car);
        }
    }

}