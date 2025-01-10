import coke from "/src/assets/Images/Coke.jpg"
import pepsi from "/src/assets/Images/Pepsi.jpg"
import chicken from "/src/assets/Images/chicken.jpeg"
import pulpy from "/src/assets/Images/pulpy.jpeg"

const ProductsData = [
    {
        id:1,
        img:coke,
        title: "Coca Cola",
        aosDelay:0
    },
    {
        id:2,
        img:pepsi,
        title: "Pepsi",
        aosDelay:200
    },
    {
        id:3,
        img:chicken,
        title: "Chicken",
        aosDelay:400
    },
    {
        id:4,
        img:pulpy,
        title: "5Alive Pulpy",
        aosDelay:600
    },
    {
        id:5,
        img:coke,
        title: "Coca Cola",
        aosDelay:800
    },
];

const Products = () => {
    return (
        <div className="mt-14 mb-12">
            <div className="container">
                {/*Header section*/}
                <div className="text-center mb-10 max-w-[600px] mx-auto">
                    <p  data-aos = "fade-up" className="rext-sm text-primary">Top Selling Products</p>
                    <h1  data-aos = "fade-up" className="text-3xl font-bold ">Products</h1>
                    <p  data-aos = "fade-up" className="text-xs text-gray-400">Our best sellers with highly affordable prices from your
                        favourite producers</p>
                </div>
                {/*Body Section*/}
                <div>
                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
                        {/*card section*/}
                        {ProductsData.map((item)  => (
                            <div
                                data-aos = "fade-up"
                                data-aos-delay={item.aosDelay}
                                key={item.id} className="space-y-3">
                                <img src={item.img} alt="Products"
                                     className="h-[220px] w-[150px] object-cover rounded-md"/>
                                <div>
                                    <h3 className="font-semibold">{item.title}</h3>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Products
