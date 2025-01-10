import coke from "../assets/Images/Coke.jpg";
import pepsi from "../assets/Images/Pepsi.jpg";
import chicken from "../assets/Images/chicken.jpeg";
import pulpy from "../assets/Images/pulpy.jpeg";


const ProductsData = [
    {
        id:1,
        img:coke,
        title: "Coca Cola",
        aosDelay:0,
        search: "Coca Cola",
        category: "SoftDrink",
        price: "$500"
    },
    {
        id:2,
        img:pepsi,
        title: "Pepsi",
        aosDelay:200,
        search: "Pepsi",
        category: "SoftDrink",
        price: "$500"
    },
    {
        id:3,
        img:chicken,
        title: "Chicken",
        aosDelay:400,
        search: "Chicken",
        category: "FrozenFood",
        price: "$500"
    },
    {
        id:4,
        img:pulpy,
        title: "5Alive Pulpy",
        aosDelay:600,
        search: "5Alive Pulpy",
        category: "SoftDrink",
        price: "$500"
    },
    {
        id:5,
        img:coke,
        title: "Table Water",
        aosDelay:800,
        search: "Table Water",
        category: "Water",
        price: "$500"
    },
];

const Shop = () => {


    return (
        <div className="max-padd-container !px-0">
            <div className="flex flex-col sm:flex-row gap-8 mb-16">
                {/*Filters*/}
                <div className="min-w-72 bg-gray-100 p-4 mt-8 pl-6 lg:pl-12">
                    {/*Search*/}
                    Search
                    <div className="pl-5 py-3 mt-4 bg-white rounded-xl">
                        <h5 className="h5 mb-4">Categories</h5>
                        <div className="flex flex-col gap-2 text-sm font-light">
                            {["SoftDrinks", "FrozenFoods", "Kerosene", "Water"].map((cat) => (
                                <label key={cat} className="flex gap-2 medium-14 text-gray-30">
                                    <input type="checkbox" value={cat} className='w-3'/>
                                    {cat}
                                </label>))}
                        </div>
                    </div>
                    <div>
                        <h5>Sort By</h5>
                        <select>
                            <option value="discount">Discount</option>
                            <option value="top">Top Selling</option>
                            <option value="favourite">Favourite</option>
                            <option value="best">Best Choice</option>

                        </select>
                    </div>
                </div>
                {/*Right Side*/}
                <div className="grid grid-cols-4 gap-4">
                    {ProductsData.map((item) => (
                        <div key={item.id} className="flex flex-col items-center">
                            <img
                                src={item.img}
                                alt="Products"
                                className="h-[220px] w-[150px] object-cover rounded-md"
                            />
                            <div>
                                <h3 className="font-semibold text-center">{item.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}
export default Shop
