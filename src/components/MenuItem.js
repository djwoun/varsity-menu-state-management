import React from "react";

const MenuItem = (props) => {
  const [choose, setChoose] = React.useState(false);

  const clickChoose = () => {
    if (!choose) {
      props.addPurchaseItem({
        name: props.name,
        price: props.price,
      });
    } else {
      props.removePurchasedItem(props.name);
    }
    setChoose(!choose);
  };

  return (
    <button
      class={choose ? "menu-item selected" : "menu-item"}
      onClick={clickChoose}
    >
      <img src={props.picture} alt={props.name} />
      <dt>{props.name}</dt>
      <dd>{props.price}</dd>
    </button>
  );
};
export default MenuItem;
