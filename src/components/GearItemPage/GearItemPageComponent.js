import React, { PropTypes } from 'react';
import GearItemHeaderComponent from './GearItemHeaderComponent/GearItemHeaderComponent';
import UserDescriptionComponent from './UserDescriptionComponent/UserDescriptionComponent';
import GearPropertyComponent from './GearPropertyComponent/GearPropertyComponent';
import constants from '../constants';

class GearItemPageComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gearItemId: constants.upperCaseFormat(this.props.params.gearItemId),
      properties: [],
    };

    this.buildGearProperties = this.buildGearProperties.bind(this);
  }

  componentWillMount() {
    let gearItem = {};
    constants.gearItems.forEach((item) => {
      if (item.id.toString() === this.state.gearItemId) {
        gearItem = item;
      }
    });

    this.setState({
      gearItem,
    });

    this.buildGearProperties(gearItem);
  }

  buildGearProperties(gearItem) {
    const properties = [];

    gearItem.properties.forEach((property, index) => {
      properties.push(<GearPropertyComponent
        title={property.title}
        description={property.description}
        type={property.type}
        key={index}
      />);
    });

    this.setState({
      properties,
    });
  }

  render() {
    return (
      <div className="gear-item-page-container page-container">
        <GearItemHeaderComponent gearItem={this.state.gearItem} />
        <UserDescriptionComponent user={this.state.gearItem.owner} />
        <div className="properties-container clearfix">
          {this.state.properties}
        </div>
      </div>
    );
  }
}

GearItemPageComponent.propTypes = {
  params: PropTypes.objectOf(PropTypes.string),
};

export default GearItemPageComponent;
