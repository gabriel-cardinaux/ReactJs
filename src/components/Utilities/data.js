const products = [
    {id: "psx5", image:"https://www.rosashermanos.com.uy/imgs/productos/productos31_13547.png", name: "PlayStation 5", price: 500000, stock: 5, description: "new gen Sony console", category: "game-consoles"},
    {id: "xbx5", image: "https://electromall.net/_next/image?url=http%3A%2F%2Fcontent.electromall.net%2FResources%2FImages%2FMigratedData%2Fxbox-series-s-512gb-ssd-white.jpg&w=256&q=75", name: "Xbox-S", price: 500000, stock: 5, description: "new gen Microsoft console", category: "game-consoles" },
    {id: "swt1", image:"https://www.electroprecio.com/media/catalog/product/cache/1/thumbnail/600x400/9df78eab33525d08d6e5fb8d27136e95/n/i/nin-consola_switch_redbl_v1.jpg", name: "Nintendo Switch", price: 250000, stock: 10, description: "Nintendo handheld console", category: "game-consoles"},
    {id: "cpu1", image:"https://dcdn.mitiendanube.com/stores/001/279/340/products/f10-sentey11-6795dc33e01b95633316076964357969-1024-1024.jpg", name: "CPU", price: 750000, stock: 20, description: "CPU for gaming", category: "pc"},
    {id: "mnt1", image:"https://s3-sa-east-1.amazonaws.com/saasargentina/j4DpPMMwYTAnprKIyW0N/imagen", name: "Monitor gamer", price: 200000, stock: 15, description: "Monitor 4k", category: "pc"},
    {id: "kbm1", image:"https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81HcjY9OObL.jpg", name: "Keyboard & mouse", price: 150000, stock: 20, description: "Keyboard & mouse package", category: "pc"},
    {id: "hds1", image:"https://www.soscomputacion.com.ar/18102-thickbox_default/auricular-gaming-panacom-pc-luces-leds-microfono-gm-8220-headset-gamer.jpg", name: "Headset", price: 45000, stock: 40, description: "Headset for gaming", category: "others"},
    {id: "jst1", image:"https://nextgames.com.ar/img/Public/1040-producto-edge-3-2212.jpg", name: "Joystick PS5", price: 30000, stock: 5, description: "Joystick for PS5", category: "others"},
    {id: "jst2", image:"https://images.start.com.ar/QAU-00021-2.jpg", name: "Joystick Xbox-S", price: 30000, stock: 5, description: "Joystick for Xbox-S", category: "others"}
];

const obtainProductList = new Promise ((resolve, reject)=>{
    setTimeout (()=>{
        resolve(products);
    }, 2000);
});

export default obtainProductList