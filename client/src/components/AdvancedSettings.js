import React from 'react';
import { Form } from 'semantic-ui-react';

const search = [
  // { key: 'articles', text: 'Articles', value: 'articles' },
  // { key: 'categories', text: 'Categories', value: 'categories' }
  { key: 'individual', text: 'Articles', value: 'individual' },
  { key: 'category', text: 'Category', value: 'category' },
  { key: 'related', text: 'Related Articles', value: 'related' },
  { key: 'linked', text: 'Linked', value: 'linked' }
];

const language = [
  { key: 'english', text: 'English', value: 'en' },
  { key: 'spanish', text: 'Spanish', value: 'es' }
];

const filter = [
  { key: 'popularity', text: 'Popularity', value: 'popularity' },
  { key: 'quality', text: 'Quality', value: 'ores_quality' },
  { key: 'linked', text: 'Linked To', value: 'most_linked_to' },
  // { key: 'score', text: 'Article Score', value: 'score' }
];

const limit = [
  { key: 'number', text: 'Number of Articles', value: 'number' },
  { key: 'size', text: 'Size (in MB)', value: 'size' }
];

class AdvancedSettings extends React.Component {
  state = {};

  handleChange = (e, { value }) => this.setState({ value });
  
  test() {
    alert(this.state.value);
  }

  render() {
    const { value } = this.state;
    return (
      <div>
        <h3>Advanced Settings</h3>
        <Form>
          <Form.Group widths="equal">
            <Form.Select
              fluid
              label="Search For"
              options={search}
              onChange={this.props.handleMethodSettingsChange}
              placeholder="Articles"
            />
            <Form.Select
              fluid
              label="Language"
              options={language}
              onChange={this.props.handleLanguageSettingsChange}
              placeholder="English"
            />
          </Form.Group>

          <Form.Group widths="equal">
            <Form.Select
              fluid
              label="Filter By"
              options={filter}
              onChange={this.props.handleFilterSettingsChange}
              placeholder="Popularity"
            />
            <Form.Input
              fluid
              label="Limit"
              type="number"
              onChange={this.props.handleLimitSettingsChange}
              placeholder="10"
            />
          </Form.Group>
        </Form>
      </div>
    );
  }
}

// <Form.Select
//   fluid
//   label="Limit By"
//   options={limit}
//   onChange={this.props.handleLimitSettingsChange}
//   placeholder="Number of Articles"
// />

export default AdvancedSettings;
