
 interface Scripts {
    name: string;
    src: string;
}  
export const ScriptStore: Scripts[] = [
    {name: 'regenerator', src: './assets/assetssimp/assets/js/regenerator-runtime.min.js'},
    {name: 'wp-polyfill', src: './assets/assetssimp/assets/js/wp-polyfill.min.js'},
    {name: 'barba', src: '/assets/assetssimp/assets/js/barba.umd.js'},
    {name: 'bodymovin', src: 'https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.4/lottie.min.js'},
    {name: 'gsap', src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js'},
    {name: 'scrollmagic', src: 'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js'},
    {name: 'libs', src: './assets/assetssimp/assets/js/libs.min.js'},
    {name: 'main', src: './assets/assetssimp/assets/js/main.min.js'}
];

