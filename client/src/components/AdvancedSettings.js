import React from 'react';
import { Form } from 'semantic-ui-react';

const search = [
  { key: 'articles', text: 'Articles', value: 'articles' },
  { key: 'categories', text: 'Categories', value: 'categories' }
];

const language = [{ key: 'english', text: 'English', value: 'english' }];

const filter = [
  { key: 'popularity', text: 'Popularity', value: 'popularity' },
  { key: 'quality', text: 'Quality', value: 'quality' },
  { key: 'linked', text: 'Linked To', value: 'linked' },
  { key: 'score', text: 'Article Score', value: 'score' }
];

const limit = [
  { key: 'number', text: 'Number of Articles', value: 'number' },
  { key: 'size', text: 'Size (in MB)', value: 'size' }
];

class AdvancedSettings extends React.Component {
  state = {};

  handleChange = (e, { value }) => this.setState({ value });

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
              placeholder="Articles"
            />
            <Form.Select
              fluid
              label="Language"
              options={language}
              placeholder="English"
            />
          </Form.Group>

          <Form.Group widths="equal">
            <Form.Select
              fluid
              label="Filter By"
              options={filter}
              placeholder="Popularity"
            />
            <Form.Select
              fluid
              label="Limit By"
              options={limit}
              placeholder="Number of Articles"
            />
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default AdvancedSettings;
