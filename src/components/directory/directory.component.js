import React from "react";
import MenuItem from '../menu-item/menu-item.component'
import './directory.styles.scss'
const Directory = () => {
  const sections = [
    {
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      id: 1,
      linkUrl: "shop/hats",
    },
    {
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      id: 2,
      linkUrl: "shop/jackets",
    },
    {
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      id: 3,
      linkUrl: "shop/sneakers",
    },
    {
      title: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      size: "large",
      id: 4,
      linkUrl: "shop/womens",
      size1: 'large'
    },
    {
      title: "mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      size: "large",
      id: 5,
      linkUrl: "shop/mens",
      size1: 'large'
    },
  ];
  return <div>
    <div className="directory-menu">
        {
            sections.map(({id,title,imageUrl, size1}) => (
                <MenuItem key={id} title={title} imgurl={imageUrl} size={size1}/>
            ))
        }
    </div>
  </div>;
};

export default Directory;