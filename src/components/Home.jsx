import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import axios from "axios";
import NavigationBar from "./NavigationBar";

const Home = () => {
  const [items, setItems] = useState([]);

  async function myItems() {
    const list = await axios.get(
      "https://interview-plus.onrender.com/api/items"
    );
    setItems(list.data);
  }
  console.log(items);
  useEffect(() => {
    myItems();
  }, []);
  return (
    <div>
      <div className="sticky">
        <NavigationBar />
      </div>

      <h1 className="text-4xl font-bold pb-7">Our Products</h1>
      <div className="flex justify-around flex-wrap gap-6">
        {items.map((item) => (
          <Card key={item.id} className="mt-6 w-96">
            <CardHeader color="blue-gray" className="relative h-63">
              <img src={item.image} alt="card-image" />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                {item.title}
              </Typography>
              <Typography>{item.description}</Typography>
              <Typography className="font-bold">
                Category:{item.category}
              </Typography>
              <Typography className="font-bold">
                Price:{item.price}/-
              </Typography>
              <Typography className="font-bold">
                Rating:{item.rating.rate}
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button>Add to cart</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
