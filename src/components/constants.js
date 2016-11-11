const constants = {
  default: {
    zipCode: 80226,
  },
  upperCaseFormat: string => (
    string.charAt(0).toUpperCase() + string.slice(1)
  ),
  gearItems: [{
    id: 0,
    imgSrc: '/assets/backpacking-gear.jpg',
    altText: 'Backpacking Gear',
    title: 'Backpacking Setup',
    description: 'A full setup for a weekend backpacking trip',
    price: 50,
    owner: {
      username: 'jstewp',
      name: 'Jack',
      imgSrc: '/assets/users/Jack.jpg',
      zipCode: 80226,
      description: 'Hi! I\'m Jack and I\'m a 25 year old adventurer from California. It\'s hard for me to pick a favorite hobbie because  I love them all. That said, I spend the most time running and boating in the summer and skiing in the winter. I am happy to help others get outside so please check out my gear!',
    },
    properties: [{
      title: 'Description',
      description: 'A full setup for a weekend backpacking trip. Kit includes a sleeping kit, stove and pot, water filter, and first aid gear. I have backpacking food as well for $5 per packaged meal.',
    }, {
      title: 'Size',
      description: 'Medium',
      type: 'text-item',
    }, {
      title: 'Gender',
      description: 'Male/Female',
      type: 'text-item',
    }],
  }, {
    id: 1,
    imgSrc: '/assets/children-ski-clothing.png',
    altText: 'Children Ski Setup',
    title: 'Children\'s Ski Setup',
    description: 'Ski clothing and gear for one child',
    price: 75,
    owner: {
      username: 'jstewp',
      name: 'Jack',
      imgSrc: '/assets/users/Jack.jpg',
      zipCode: 80226,
      description: 'Hi! I\'m Jack and I\'m a 25 year old adventurer from California. It\'s hard for me to pick a favorite hobbie because  I love them all. That said, I spend the most time running and boating in the summer and skiing in the winter. I am happy to help others get outside so please check out my gear!',
    },
    properties: [{
      title: 'Description',
      description: 'Two sets of childrens ski clothes and ski gear for rent individually. Kits include jackets, pants, helmets, goggles, boots, skis, and poles. No long underware or socks provided.',
      type: 'text-area',
    }, {
      title: 'Size',
      description: 'Medium',
      type: 'text-item',
    }, {
      title: 'Gender',
      description: 'Male/Female',
      type: 'text-item',
    }],
  }, {
    id: 2,
    imgSrc: '/assets/ski-clothing.jpg',
    altText: 'Ski Clothing',
    title: 'Ski Clothing',
    description: 'Top of the line ski clothing',
    price: 30,
    owner: {
      username: 'jstewp',
      name: 'Jack',
      imgSrc: '/assets/users/Jack.jpg',
      zipCode: 80226,
      description: 'Hi! I\'m Jack and I\'m a 25 year old adventurer from California. It\'s hard for me to pick a favorite hobbie because  I love them all. That said, I spend the most time running and boating in the summer and skiing in the winter. I am happy to help others get outside so please check out my gear!',
    },
    properties: [{
      title: 'Description',
      description: 'Ski clothing for adult male. Set includes Gortex shell and snow pants, a 800 fill down jacket,  helmet with polarized goggles, and long underware layers.',
      type: 'text-area',
    }, {
      title: 'Size',
      description: 'Large',
      type: 'text-item',
    }, {
      title: 'Gender',
      description: 'Male',
      type: 'text-item',
    }],
  }, {
    id: 3,
    imgSrc: '/assets/snowshoes.gif',
    altText: 'Snowshoews',
    title: 'Snow Shoes',
    description: 'Size L snowshoes for mountain terrain',
    price: 25,
    owner: {
      username: 'jstewp',
      name: 'Jack',
      imgSrc: '/assets/users/Jack.jpg',
      zipCode: 80226,
      description: 'Hi! I\'m Jack and I\'m a 25 year old adventurer from California. It\'s hard for me to pick a favorite hobbie because  I love them all. That said, I spend the most time running and boating in the summer and skiing in the winter. I am happy to help others get outside so please check out my gear!',
    },
    properties: [{
      title: 'Description',
      description: 'One set of MSR all terrain snow shoes. These strap on to any existing snow boots or mountaineering boots. Work great for exploring moderate angle trails around the Front Range.',
      type: 'text-area',
    }, {
      title: 'Size',
      description: 'Medium',
      type: 'text-item',
    }, {
      title: 'Gender',
      description: 'Male',
      type: 'text-item',
    }],
  }],
  user: {
    username: 'mschmidt712',
    name: 'Marie',
    imgSrc: '/assets/users/Marie.jpg',
    zipCode: 80226,
    description: 'Hi! I\'m Marie and I\'m a 25 year old adventurer from California. It\'s hard for me to pick a favorite hobbie because  I love them all. That said, I spend the most time running and boating in the summer and skiing in the winter. I am happy to help others get outside so please check out my gear!',
  },
};

export default constants;
