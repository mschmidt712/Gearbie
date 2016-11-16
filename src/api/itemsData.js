export default [{
  id: 0,
  imgSrc: '/assets/backpacking-gear.jpg',
  altText: 'Backpacking Gear',
  title: 'Backpacking Setup',
  description: 'A full setup for a weekend backpacking trip',
  category: 'hiking',
  price: 50,
  securityDeposit: 450,
  owner: {
    personsId: 0,
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
  disabledDates: [],
}, {
  id: 1,
  imgSrc: '/assets/children-ski-clothing.png',
  altText: 'Children Ski Setup',
  title: 'Children\'s Ski Setup',
  description: 'Ski clothing and gear for one child',
  category: 'snow_sports',
  price: 40,
  securityDeposit: 400,
  owner: {
    personsId: 0,
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
  disabledDates: [],
}, {
  id: 2,
  imgSrc: '/assets/ski-clothing.jpg',
  altText: 'Ski Clothing',
  title: 'Ski Clothing',
  description: 'Top of the line ski clothing',
  category: 'snow_sports',
  price: 30,
  securityDeposit: 400,
  owner: {
    personsId: 0,
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
  disabledDates: [],
}, {
  id: 3,
  imgSrc: '/assets/snowshoes.gif',
  altText: 'Snowshoes',
  title: 'Snow Shoes',
  description: 'Size L snowshoes for mountain terrain',
  category: 'snow_sports',
  price: 25,
  securityDeposit: 150,
  owner: {
    personsId: 1,
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
  disabledDates: [],
}, {
  id: 4,
  imgSrc: '/assets/crash_pad.jpg',
  altText: 'Crash Pad',
  title: 'Crash Pad',
  description: 'Black Diamond bouldering crash pad',
  category: 'climbing',
  price: 30,
  securityDeposit: 200,
  owner: {
    personsId: 1,
  },
  properties: [{
    title: 'Description',
    description: 'A Black Diamond bouldering crash pad in great shape. The dimensions of the pad are 100 x 114 x 10cm. All buckles and straps in working order.',
    type: 'text-area',
  }],
  disabledDates: [],
}];
