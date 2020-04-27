import React, { Component } from 'react';
import './SettingForm.css';

interface Props {
  handleChange: Function
}

interface States {
  selectedCount: number,
  selectedArea: Array<boolean>
}

class SettingForm extends Component<Props, States> {
  constructor(props: Props) {
    super(props);
    this.state = {
      selectedCount: 6,
      selectedArea: [ true, true, true, true, true, true ]
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: any) {
    if (!e.target.checked && this.state.selectedCount <= 1) {
      e.target.checked = true;
    } else {
      const area_copy = this.state.selectedArea;
      this.setState({
        selectedCount: this.state.selectedCount + (area_copy[e.target.name] ? -1 : 1)
      });
      area_copy[e.target.name] = !area_copy[e.target.name];
      return this.props.handleChange(this.state.selectedArea);
    }
  }

  render() {
    return (
      <>
        <p className="SubText">Question Range</p>
        <div className="CheckBoxList">
          <label htmlFor="asia"><input type="checkbox" name="0" id="asia" defaultChecked={true} onChange={this.handleChange} />Asia(50)</label><br />
          <label htmlFor="europe"><input type="checkbox" name="1" id="europe" defaultChecked={true} onChange={this.handleChange} />Europe(43)</label><br />
          <label htmlFor="africa"><input type="checkbox" name="2" id="africa" defaultChecked={true} onChange={this.handleChange} />Africa(56)</label><br />
          <label htmlFor="south-america"><input type="checkbox" name="3" id="south-america" defaultChecked={true} onChange={this.handleChange} />South america(22)</label><br />
          <label htmlFor="north-america"><input type="checkbox" name="4" id="north-america" defaultChecked={true} onChange={this.handleChange} />North America(13)</label><br />
          <label htmlFor="oceania"><input type="checkbox" name="5" id="oceania" defaultChecked={true} onChange={this.handleChange} />Oceania(16)</label><br />
        </div>
      </>
    );
  }
}

export default SettingForm;