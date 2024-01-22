type MenProducts = {
    id: number,
    name: string,
    price: number,
    image: string,
    category: string,
    description: string,
    quantity: number;
}

type WomanProducts = {
    id: number,
    name: string,
    price: number,
    image: string,
    category: string,
    description: string,
    quantity: number
}

type Accessories = {
    id: number,
    name: string,
    price: number,
    image: string,
    category: string,
    description: string,
    quantity: number
}


export const MenProductsArray : MenProducts[] = [{
    id: 0,
    name: "Estopa Black t-shirt S",
    price: 10.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137057/DSC06755-800x1067_hxfwi6.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 1,
    name: "Lacoste white stripes S",
    price: 6.50,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137057/DSC06758-800x1067_bfcorq.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id:2,
    name: "Pirelli Vintage t-shirt M",
    price: 10.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137058/DSC06765-800x1067_m5ljuh.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
},{
    id: 3,
    name: "Larios Vintage black M",
    price: 10.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137058/DSC06773-800x1067_xw59vz.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
    
}, {
    id: 4,
    name: "Nike Vintage SweartShirt M",
    price: 22.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137058/DSC06850-800x1067_soeius.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 5,
    name: "Green Day Vintage T-shirt M",
    price: 10.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137058/DSC06782-800x1067_xiznll.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 6,
    name: "Timberland Vintage Jacket L",
    price: 30.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137058/DSC06827-800x1067_tlwcbu.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 7,
    name: "Nike Vintage Sweater L",
    price: 25.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137059/DSC06859-800x1067_glng0v.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 8,
    name: "Epi Blue Vintage t-shirt L",
    price: 30.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137059/DSC06882-800x1067_xyuduf.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 9,
    name: "Vintage Yellow Shirt M",
    price: 12.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137058/DSC06761-800x1067_oneb0b.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 10,
    name: "Green Vintage Jacket XL",
    price: 35.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137059/DSC06897-800x1067_xtaywl.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
},{
    id:11,
    name:"Burberry Red-Blue Jacket XL",
    price: 30.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137059/DSC06893-800x1067_upyqfc.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 12,
    name: "White Short Vintage M",
    price: 5.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137059/DSC07005-800x1067_xf1i4l.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 13,
    name: "Mickey`s Vintage T-shirt M",
    price: 12.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137059/DSC07037-800x1067_g5pznx.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 14,
    name: "Chase Nascar Black Jacket M",
    price: 25.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137059/DSC06899-800x1067_fpinwf.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 15,
    name: "Dickies navy T-shirt M",
    price: 6.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137060/DSC07052-800x1067_sugbw7.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 16,
    name: "Vintage crazy T-shirt M",
    price: 6.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137060/DSC07077-800x1067_wnpwnx.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 17,
    name: "Depised icon red T-shirt L",
    price: 6.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137060/DSC07083-800x1067_bmwd66.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 18,
    name: "Burberrys Vintage Stripes shirt L",
    price: 10.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137061/DSC07097-800x1067_zlisrl.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 19,
    name: "Burberrys Vintage Stripes shirt M",
    price: 10.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137061/DSC07101-800x1067_qbclit.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 20,
    name: "The North Face Black M",
    price: 10.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137061/DSC07107-800x1067_cfumql.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 21,
    name: "Columbia grey fleece XL",
    price: 14.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137061/DSC07114-800x1067_zfqypq.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 22,
    name: "Sergio Taccini grey L",
    price: 18.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137062/DSC07121-800x1067_i5sufm.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 23,
    name: "Tommy Hilfiger blue Jersey L",
    price: 18.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137062/DSC07125-800x1067_p3el6b.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 24,
    name: "Lacoste beige Jersey L",
    price: 22.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137062/DSC07137-800x1067_xzamx7.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 25,
    name: "Versace grey Jacket M",
    price: 42.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137063/DSC07159-800x1067_aopecb.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 26,
    name: "Ford Brown Jacket L",
    price: 32.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137063/DSC07166-800x1067_mzjxlb.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 27,
    name: "Dortmund Rework yellow M",
    price: 25.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137063/DSC07171-800x1067_jlczra.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 28,
    name: "Mickey grey Sweater M",
    price: 16.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137063/DSC07168-800x1067_ucbml2.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 29,
    name: "Disney 2000 Sweater 2XL",
    price: 16.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137063/DSC07173-800x1067_aklvoj.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 30,
    name: "Adidas yellow Sweater L",
    price: 22.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137064/DSC07176-800x1067_hjj026.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 31,
    name: "Lacoste blue Polo 1/5 M",
    price: 15.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137064/DSC07178-800x1067_h9uqib.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 32,
    name: "Lacoste Stripes BlockColor L",
    price: 15.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137064/DSC07180-800x1067_dfrfsm.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 40,
    name: "Levi`s Corduray Sand trousers M",
    price: 9.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137064/DSC07195-800x1067_va7vrv.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 41,
    name: "Burberry sand Short 2XL",
    price: 18.50,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137065/DSC07203-800x1067_wbk1oh.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 42,
    name: "Coogi blue Jeans L",
    price: 45.50,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137065/DSC07199-800x1067_k3zsle.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 43,
    name: "Adidas Vintage track Jacket L",
    price: 16.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137065/DSC07243-800x1067_mujb2d.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 44,
    name: "Adidas Black track Jacket XL",
    price: 16.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137066/DSC07246-800x1067_auubfk.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 45,
    name: "Amsterdam Vintage Swater",
    price: 8.50,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137066/DSC07250-800x1067_xvy0vd.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 46,
    name: "Alpha Industries white Sweater",
    price: 8.50,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137066/DSC07270-800x1067_llzn9e.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 47,
    name: "Homer Vintage Navy M",
    price: 12.50,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137066/DSC07284-800x1067_ub9xuz.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 48,
    name: "Adidas Vintage grey T-shirt L",
    price: 8.50,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137067/DSC07294-800x1067_idklyy.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 49,
    name: "7Up Vintage T-shirt L",
    price: 7.50,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137067/DSC07298-800x1067_xdkxzl.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 50,
    name: "Mtv Coca-Cola European top 20 M",
    price: 7.50,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137068/DSC07300-800x1067_f1bghv.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 51,
    name: "My Eyes Vintage M",
    price: 8.50,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137068/DSC07308-800x1067_e6aj4l.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 52,
    name: "France 98 Coca-Cola Vintage 90 L",
    price: 9.50,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137068/DSC07321-800x1067_nb3p2e.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 53,
    name: "Embroidery red T-shirt L",
    price: 6.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137068/DSC07327-800x1067_szd7n7.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 54,
    name: "Rage Against The Machine L",
    price: 19.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137068/DSC07332-800x1067_hiawyt.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 55,
    name: "Peter Pan bootleg 90s M",
    price: 6.50,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137069/DSC07344-800x1067_doxez9.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 56,
    name: "MotoMania Vintage Black T-shirt XL",
    price: 7.50,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137069/DSC07354-800x1067_c3s1ae.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 57,
    name: "Burberrys Vintage Shirt L",
    price: 12.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137069/DSC07399-800x1067_tdxel4.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 58,
    name: "Ralph Lauren Vintage 90 L",
    price: 24.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137070/DSC07443-800x1067_vlwo81.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 59,
    name: "Ralph Lauren Vintage stripes polo S",
    price: 24.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137070/DSC07431-800x1067_wqh9pz.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 60,
    name: "Disney Vintage 90s XL",
    price: 10.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137070/DSC07447-800x1067_ye1mej.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 61,
    name: "Malboro Vintage Jacket XL",
    price: 24.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137070/DSC07449-800x1067_onc4nc.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 62,
    name: "Majestic Cubs Vintage XXL",
    price: 10.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137071/DSC07619-800x1067_jvoghx.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 63,
    name: "Jordan Vintage Red Jacket XXL",
    price: 22.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137071/DSC07609-800x1067_yayvzz.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 64,
    name: "Tommy Hilfiger Vintage Red Coat L",
    price: 32.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137071/DSC07623-800x1067_hnebyq.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 65,
    name: "Tommy Hilfiger Puffer M",
    price: 24.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137071/DSC07630-800x1067_hccv9u.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 66,
    name: "Lacoste Vintage Coat XL",
    price: 44.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137071/DSC07635-800x1067_csdjsf.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 67,
    name: "Burberrys Vintage Sweater M",
    price: 16.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137071/DSC07645-800x1067_dyio1c.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 68,
    name: "Ralph Lauren blue Polo M",
    price: 16.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137072/DSC07653-800x1067_abpmgt.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 69,
    name: "Vintage grey/red Sweater S",
    price: 6.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137074/DSC07695-800x1067_sbndtp.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 70,
    name: "Armani Vintage yellow shirt L",
    price: 10.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137072/DSC07661-800x1067_dlncdu.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 71,
    name: "Dolce Gabanna Vintage white Shirt L",
    price: 10.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137072/DSC07666-800x1067_sik5ka.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 72,
    name: "Yves Saint Lauren yellow Shirt XL",
    price: 14.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137073/DSC07671-800x1067_efyv14.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 73,
    name: "Levi`s white Shirt L",
    price: 6.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137073/DSC07681-800x1067_s8gmnn.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 74,
    name: "Burberrys Vintage Shirt XL",
    price: 12.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137073/DSC07684-800x1067_eboc2y.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 75,
    name: "Vintage blue/black bottom Sweater S",
    price: 6.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137074/DSC07701-800x1067_og1hr4.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 76,
    name: "Vintage blue/grey Sweater M",
    price: 6.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137074/DSC07704-800x1067_safyg5.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 77,
    name: "Vintage grey/whiter Sweater M",
    price: 6.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137074/DSC07706-800x1067_vrz655.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 78,
    name: "Vintage Etnic Sweater M",
    price: 6.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137075/DSC07715-800x1067_bzfu96.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 79,
    name: "Barcelona Vintage 90s t-shirt",
    price: 6.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137076/DSC07740-800x1067_lpxcwv.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 80,
    name: "Sliptnok Vintage black Hodie M",
    price: 8.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137076/DSC07730-800x1067_qko1si.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 81,
    name: "Mohair Vintage Cardigan S",
    price: 6.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137076/DSC07717-800x1067_y0p8vd.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 82,
    name: "Pink Elefant Etnik green M",
    price: 6.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137076/DSC07754-800x1067_o11ux2.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 83,
    name: "Hulk Vintage Promo XL",
    price: 12.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137076/DSC07748-800x1067_yz5dte.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 84,
    name: "Vintage Denin Jacket",
    price: 9.50,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137076/DSC07756-800x1067_byozoq.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 85,
    name: "Montino Vintage Leather Jacket 50 L",
    price: 12.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137077/DSC07765-800x1067_nw3g4p.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 86,
    name: "Levi`s Denin Jacket L",
    price: 10.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137077/DSC07758-800x1067_t8t0ry.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 87,
    name: "Scotch Vintage black Jacket L",
    price: 12.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137077/DSC07768-800x1067_nsnixx.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 88,
    name: "Keffer Vintage Jacket M",
    price: 6.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137078/DSC07773-800x1067_qbsszq.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 89,
    name: "Vintage Brown Jacket L",
    price: 8.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137078/DSC07776-800x1067_qln6zm.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 90,
    name: "Vintage Purple coat M",
    price: 9.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137078/DSC07778-800x1067_kwmgoy.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 91,
    name: "Stripes Vinntage Poncho M",
    price: 6.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137078/DSC07781-800x1067_qblc2v.jpg",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 92,
    name: "Perfect Cell Vintage shirt M",
    price: 200.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695987868/PerfectCell_jcgfd5.png",
    category: "MenShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
},
];


export const WomanProductsArray : WomanProducts[] = [{
    id: 93,
    name: "Tommy Hilfiger camel skirt M",
    price: 12.50,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191286/DSC06797-800x1067_kg0vnw.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
},{
    id: 94,
    name: "Adidas blue woman short M",
    price: 12.50,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191287/DSC07205-800x1067_ig1u6m.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
},{
    id:95,
    name: "Levis rust short S",
    price: 7.50,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191287/DSC06803-800x1067_lxxcuc.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
},{
    id: 96,
    name: "Columbia turquose fleece M",
    price: 14.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191287/DSC07119-800x1067_ljjdyb.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 97,
    name: "Levis blue short M",
    price: 7.50,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191287/DSC06820-800x1067_s6hrbk.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 98,
    name: "Moschino Woman green Sweater M",
    price: 14.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191287/DSC07381-800x1067_mk6gja.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 99,
    name: "Levis 527 blue short S",
    price: 10.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191287/DSC06806-800x1067_vandpm.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 100,
    name: "Tommy Hillfiger Usa short M",
    price: 17.50,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191287/DSC06799-800x1067_d2wakj.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 101,
    name: "Columbia yellow Woman Fleece M",
    price: 11.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191288/DSC06869-800x1067_wglxlf.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 102,
    name: "Columbia yellow Woman Fleece L",
    price: 12.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191288/DSC06866-800x1067_tmpxui.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 103,
    name: "Thomas Burberry Woman Shirt L",
    price: 12.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191288/DSC07393-800x1067_zpjteq.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
},{
    id:104,
    name:"Levis 557 Short Woman M",
    price: 18.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191288/DSC06814-800x1067_jnf7ce.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 105,
    name: "Burberry Woman Black Jeans M",
    price: 9.50,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191288/DSC06951-800x1067_u3vtjw.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 106,
    name: "Burberry Woman shirt L",
    price: 12.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191288/DSC07396-800x1067_fimzmf.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 107,
    name: "Dolce Gabanna grey Woman Jacket M",
    price: 21.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191289/DSC06878-800x1067_q1twvw.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 108,
    name: "Columbia violet/black Woman Fleece M",
    price: 18.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191289/DSC07103-800x1067_ntebuy.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 109,
    name: "Kappa Crop Top XL",
    price: 10.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191289/DSC07404-800x1067_c2qftp.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 111,
    name: "Depised icon red T-shirt L",
    price: 6.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191289/DSC07406-800x1067_rustb5.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 112,
    name: "Burberrys Woman red polo M",
    price: 10.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191290/DSC07423-800x1067_t3ntfg.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 113,
    name: "Burberrys Vintage blouse 48",
    price: 10.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191290/DSC07655-800x1067_ywwaed.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 114,
    name: "Lacoste Stripes violet Woman Jersey M",
    price: 20.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191290/DSC07427-800x1067_liha4k.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 115,
    name: "Burberrys Vintage Navy blouse S",
    price: 14.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191290/DSC07659-800x1067_lbz9qo.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 116,
    name: "Burberrys Stripes Crop-Top S",
    price: 10.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191290/DSC07408-800x1067_pomtys.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 116,
    name: "Yves Saint Laurent Stripes Crop-Top S",
    price: 12.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191290/DSC07410-800x1067_brmxcf.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 117,
    name: "Columbia pink Fleece M",
    price: 10.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191290/DSC07797-800x1067_vwq4fg.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 118,
    name: "Thomas Burberry Woman white Jacket M",
    price: 26.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191291/DSC07838-800x1067_qt0ahc.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 119,
    name: "Columbia aqua Jacket M",
    price: 23.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191291/DSC07801-800x1067_am27oe.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 120,
    name: "Tommy Hillfiger Woman red Sweater L",
    price: 8.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191291/DSC07877-800x1067_zgerwg.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 121,
    name: "Armani Vintage grey Pants M",
    price: 10.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191291/DSC07860-800x1067_lqfoha.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 122,
    name: "Tommy Hillfiger Woman zip-up brown Sweater L",
    price: 8.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191291/DSC07875-800x1067_woywff.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 123,
    name: "Burberry Woman grey 1/5 t-shirt",
    price: 8.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191291/DSC07970-800x1067_hlg5rk.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 124,
    name: "Columbia blue navy Fleece M",
    price: 14.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191291/DSC07976-800x1067_tbhr8v.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 125,
    name: "Lacoste Stripes BlockColor L",
    price: 15.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137064/DSC07180-800x1067_dfrfsm.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 126,
    name: "Tommy Hillfiger Woman blue/grey T-shirt S",
    price: 9.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191292/DSC07987-800x1067_cz0igp.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 127,
    name: "Tommy Hillfiger pink Jersey M",
    price: 12.50,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191292/DSC08029-800x1067_uti9pq.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 128,
    name: "Burberry Woman Bootleg Jersey S",
    price: 18.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191292/DSC08077-800x1067_z2jqgp.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 129,
    name: "Ralph Lauren purple Woman Jersey M",
    price: 16.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191292/DSC08079-800x1067_flatvv.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 130,
    name: "Thomas Burberry Vintage black Jersey M",
    price: 14.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191292/DSC08058-800x1067_tq5yon.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 131,
    name: "Ralph Lauren white Jersey M",
    price: 18.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191292/DSC08081-800x1067_znc2dm.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 132,
    name: "Thomas Burberry Vintage navy Jersey M",
    price: 16.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191292/DSC08083-800x1067_whrwao.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 133,
    name: "Thomas Burberry Vintage pink Jersey M",
    price: 18.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191292/DSC08061-800x1067_dn9pku.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 134,
    name: "Burberry cream Bolero S",
    price: 25.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191293/DSC08086-800x1067_pamfpv.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 135,
    name: "Timberland blue Jacket S",
    price: 12.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191293/DSC08107-800x1067_sk2bb6.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 136,
    name: "Lee red/blue Woman Shirt M",
    price: 7.50,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191293/DSC08092-800x1067_gstn8y.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 137,
    name: "Lacoste beige Long T-shirt",
    price: 10.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191293/DSC08155-800x1067_wskyol.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 138,
    name: "Louis Y2k Woman T-Shirt M",
    price: 12.50,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191293/DSC08183-800x1067_ezhjuv.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 139,
    name: "Green Flowers Woman Jersey L",
    price: 6.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191294/DSC08203-800x1067_ctgozk.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 140,
    name: "Burberrys Vintage sand Woman M",
    price: 45.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191294/DSC08222-800x1067_bkdevf.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 141,
    name: "Burberrys Vintage black Woman Jacket L",
    price: 16.50,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191294/DSC08225-800x1067_da4dej.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 142,
    name: "Burberrys Vintage grey Woman Jacket L",
    price: 17.50,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191294/DSC08227-800x1067_pzjre5.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 143,
    name: "Burberrys Vintage black Woman Jacket L",
    price: 15.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191294/DSC08241-800x1067_a3ucjr.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 144,
    name: "Tommy Hillfiger white Jacket M",
    price: 45.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191294/DSC08326-800x1067_dskycv.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 145,
    name: "Burberrys Vintage red coat Woman Jacket L",
    price: 55.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191294/DSC08233-800x1067_bcvc1o.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 146,
    name: "Levis blue Woman Skirt M",
    price: 10.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191295/DSC08312-800x1067_gwhxxx.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 147,
    name: "Burberry burgundy Woman Jacket L",
    price: 24.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191295/DSC08335-800x1067_qycso8.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 148,
    name: "Levis Woman black Jeans S",
    price: 15.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191295/DSC08363-800x1067_nwadt0.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 149,
    name: "Kappa black Woman Sweater S",
    price: 8.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191295/DSC08429-800x1067_pwcyrz.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 150,
    name: "Kappa black Woman Sweater S",
    price: 8.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191295/DSC08429-800x1067_pwcyrz.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 151,
    name: "Adidas black Woman crop coat M",
    price: 14.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191295/DSC08761-800x1067_hdjd8j.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 152,
    name: "Nike yellow Woman Track Jacket M",
    price: 15.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191295/DSC08782-800x1067_ppoatb.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 153,
    name: "Tommy Hillfiger Stripes Woman XS",
    price: 7.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191296/DSC08805-800x1067_kgjams.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 154,
    name: "Adidas Vintage Woman aqua Jacket XL",
    price: 25.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191296/DSC08859-800x1067_gyy6vo.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 155,
    name: "Tommy Hillfiger orange Sweater XS",
    price: 20.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191296/DSC08890-800x1067_tt88ey.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 156,
    name: "Burberry blue Woman Crop Polo XS",
    price: 14.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191296/DSC08969-800x1067_wa4yiq.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 157,
    name: "Lacoste Bootle Stripes Woman M",
    price: 12.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191296/DSC08822-800x1067_lheesu.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 158,
    name: "Carhartt black Woman Jacket S",
    price: 30.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191297/DSC09004-800x1067_vcbi0j.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 159,
    name: "Louis Vintage blue Woman Jeans",
    price: 10.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191297/DSC08986-800x1067_xa8dah.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 160,
    name: "The North Face black Woman Fleece",
    price: 30.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191297/DSC09064-800x1067_tmc2yb.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 161,
    name: "Tommy Hillfiger red turtle-neck M",
    price: 20.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191297/DSC09054-800x1067_ewvcmm.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 162,
    name: "Tommy Hillfiger Stripes Woman T-shirt S",
    price: 18.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191298/DSC09051-800x1067_vokazk.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 163,
    name: "Brown Vintage Jersey M",
    price: 25.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191298/DSC09078-800x1067_llu9qi.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 164,
    name: "Burberry red Woman Knitted M",
    price: 30.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191298/DSC09074-800x1067_ykrwch.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 165,
    name: "Tommy Hillfifer Stripes Jersey XL",
    price: 26.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191302/DSC09119-800x1067_qutbf1.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 166,
    name: "Armani Jeans blue Woman T-shirt",
    price: 20.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191303/DSC09127-800x1067_jcfopm.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 167,
    name: "Giorgio Armani blue Denin Woman Jeans S/M",
    price: 30.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191303/DSC09148-800x1067_bberfh.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 168,
    name: "Levis orange Woman Denin Jeans XS",
    price: 25.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191303/DSC09146-800x1067_pefigw.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 169,
    name: "Burberrys Woman mustard Jacket L",
    price: 30.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695137076/DSC07719-800x1067_h6gvtf.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 170,
    name: "Burberry black Woman Trausers L",
    price: 30.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191304/DSC09171-800x1067_gqyspu.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 171,
    name: "Burberry Woman 80s courdary S",
    price: 25.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191304/DSC09180-800x1067_m57n5c.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 172,
    name: "Columbia light brown Woman S",
    price: 25.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191304/DSC09208-800x1067_bnb29r.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
},  {
    id: 173,
    name: "Tommy Hillfiger green Woman Polo XS",
    price: 14.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191304/DSC09231-800x1067_s6etyg.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 174,
    name: "Burberrys Vintage bootleg XS",
    price: 18.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191305/DSC09576-800x1067_jj63dw.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 175,
    name: "Adidas Vintage blue Woman T-shirt",
    price: 8.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191305/DSC09771-800x1067_mvjcye.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 176,
    name: "Lacoste black Woman T-shirt",
    price: 12.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191305/DSC09763-800x1067_vrbwdi.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 177,
    name: "Levis 501 blue Jeans XS",
    price: 25.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695191305/DSC09168-800x1067_jjr81z.jpg",
    category: "WomanShop",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}
];

export const AccessoriesArray : Accessories[] = [{
    id: 178,
    name: "Oakley Vintage Glasses",
    price: 45.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695278137/DSC08702-800x1067_z9tq3x.jpg",
    category: "Accersories",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
},{
    id: 179,
    name: "Y2K Glasess",
    price: 5.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695278136/DSC08660-800x1067_etfma5.jpg",
    category: "Accersories",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
},{
    id: 180,
    name: "Oakley Vintage black Glasses",
    price: 45.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695278136/DSC08693-800x1067_rzqrwq.jpg",
    category: "Accersories",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
},{
    id: 181,
    name: "Michellin Vintage Cap",
    price: 8.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695278136/DSC08654-800x1067_mwdmm3.jpg",
    category: "Accersories",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 182,
    name: "Winston Vintage red Cap",
    price: 8.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695278136/DSC08637-800x1067_aecf6j.jpg",
    category: "Accersories",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 183,
    name: "Mercedez-Benz Vintage blue Cap",
    price: 6.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695278136/DSC08644-800x1067_ps9k0f.jpg",
    category: "Accersories",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 184,
    name: "New York Nicks Starter Cap",
    price: 12.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695278136/DSC08623-800x1067_xqxckr.jpg",
    category: "Accersories",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 185,
    name: "Fila red Cap",
    price: 6.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695278136/DSC08606-800x1067_gkgrrt.jpg",
    category: "Accersories",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 186,
    name: "Reebok Vintage Bag",
    price: 8.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695278136/DSC07533-1-800x1067_iygqoq.jpg",
    category: "Accersories",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 187,
    name: "7Up 1985 Bucket Cap",
    price: 8.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695278135/DSC08596-800x1067_rn9vu9.jpg",
    category: "Accersories",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 188,
    name: "Jordan Vintage HeadBand",
    price: 5.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695278135/DSC07560-800x1067_lv2n7g.jpg",
    category: "Accersories",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
},{
    id:189,
    name:"New York Jets Vintage Cap",
    price: 6.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695278135/DSC07526-1-800x1067_wtiffg.jpg",
    category: "Accersories",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 190,
    name: "Winston Fanny Pack",
    price: 5.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695278135/DSC07563-800x1067_1_zun549.jpg",
    category: "Accersories",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 191,
    name: "Nike Vintage grey BackPack",
    price: 9.50,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695278135/DSC07547-800x1067_s6ufxl.jpg",
    category: "Accersories",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 192,
    name: "Fila Bucket Cap",
    price: 12.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695278134/DSC08586-800x1067_zas4nf.jpg",
    category: "Accersories",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 193,
    name: "Carlos Checa Vintage red Cap",
    price: 6.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695278134/DSC07525-1-800x1067_x41qx4.jpg",
    category: "Accersories",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 194,
    name: "Mistral Vintage Fanny Pack",
    price: 6.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695278134/DSC08581-800x1067_jbflge.jpg",
    category: "Accersories",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 195,
    name: "Coca-cola Vintage red Back Pack",
    price: 14.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695278134/DSC08571-800x1067_scggmf.jpg",
    category: "Accersories",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 196,
    name: "Burberrys Vintage Hat",
    price: 70.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695278134/DSC07512-1-800x1067_dq77oc.jpg",
    category: "Accersories",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 197,
    name: "Fox yellow Cap",
    price: 5.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695278134/DSC07489-800x1067_xzm0pn.jpg",
    category: "Accersories",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 198,
    name: "Polo Ralph Lauren Vintage Wallet",
    price: 12.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695278133/DSC07586-800x1067_ggwxxq.jpg",
    category: "Accersories",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 199,
    name: "Mercedez Vintage grey Cap",
    price: 6.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695278133/DSC07516-1-800x1067_uf5mua.jpg",
    category: "Accersories",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 200,
    name: "Camel Vintage Yellow Wallet",
    price: 5.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695278133/DSC08564-800x1067_gwlrxy.jpg",
    category: "Accersories",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 201,
    name: "Lucky Strike Vintage Cap",
    price: 8.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695278133/DSC07491-800x1067_qfpqzb.jpg",
    category: "Accersories",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}, {
    id: 202,
    name: "Barcelona Kappa Vintage red Cap",
    price: 8.00,
    image: "https://res.cloudinary.com/dtqgzojs3/image/upload/v1695278133/DSC07477-800x1067_qyxxiz.jpg",
    category: "Accersories",
    description: "Vintage Clothing: Step into the past with our curated collection, where each piece whispers tales of style and grace from a bygone era. Embrace the nostalgia and timeless allure of vintage fashion.",
    quantity: 1
}
];
