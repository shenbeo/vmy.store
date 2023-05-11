import { createContext, useEffect, useState } from "react";
import { dataApi } from "../Fake_api/DataApi";
import { toast } from "react-toastify";

export const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState();

  const [products, setProducts] = useState(dataApi); //API

  const success = () => {
    toast.success("Sản phẩm đã vào giỏ hàng!");
  };

  // open/close cart
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };

  // open/close user
  const [isOpenUser, setIsOpenUser] = useState(false);
  const handleCloseUser = () => {
    setIsOpenUser(false);
  };

  // search
  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    const searcedProducts = dataApi.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProducts(searcedProducts);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  };

  // sort
  const filterResult = (catItem) => {
    const result = dataApi.filter((curDate) => {
      return curDate.category === catItem;
    });
    setProducts(result);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  };

  //cart
  const [cart, setCart] = useState([]);

  //item amount stae
  const [itemAmount, setItemAmount] = useState(0);
  // update item amount
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currenItem) => {
        return accumulator + currenItem.amount;
      }, 0);
      setItemAmount(amount);
    }
  }, [cart]);

  // total price
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const total = cart.reduce((accumulator, currenItem) => {
      return accumulator + currenItem.price * currenItem.amount;
    }, 0);
    setTotal(total);
  });

  // add to cart
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    // check if the item is alreadly in the cart
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    // if cart item is already in the cart
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  //remove from cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  //increase amount
  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem, id);
  };

  //increase amount
  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    if (cartItem.amount < 2) {
      removeFromCart(id);
    }
  };
  // clear cart
  const clearCart = () => {
    setCart([]);
  };

  return (
    <AppContext.Provider
      value={{
        dataApi,
        total,
        isOpen,
        setIsOpen,
        handleClose,
        products,
        setProducts,
        cart,
        addToCart,
        removeFromCart,
        increaseAmount,
        decreaseAmount,
        clearCart,
        itemAmount,
        setProducts,
        filterResult,
        isOpenUser,
        setIsOpenUser,
        handleCloseUser,
        handleSearch,
        success,
        loading,
        setLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
