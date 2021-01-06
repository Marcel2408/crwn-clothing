import React from "react";
import CollectionPreview from "../../components/collection-preview/collectionPreview.component";
import SHOP_DATA from "./shop.data";
import "./shoppage.styles.scss";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const {collections} = this.state;
    return (
      collections.map(({id, ...otherCollectionProps}) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))
    )
  }
}

export default ShopPage;