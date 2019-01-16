import withLayout from '../lib/withLayout';
import { Formik } from 'formik';
import InternList from '../components/InternList';


class ContactUs extends React.Component {
  constructor(props) {
    super(props)
  }
  static async getInitialProps() {
    // Fetch data from third party API here!
    return {};
  }
  handleSubmit = (values, actions) => {
    console.log(values, actions)
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      actions.setSubmitting(false);
    }, 1000);
  }
  render() {
    return (
      <div style={{'marginTop': '64px'}}>
      {/* Below is the InternList component */}
        <InternList interns={[
          'Micheal Jackson',
          'Stephen King',
          'Mack Bonnie',
          'Chris Tucker',
          'Lisa Simpson',
          'Homer Simpson',
          'Craig Mack'
        ]}/>
        <div>
          <Formik
            initialValues={{ name: 'Jacolby'}}
            onSubmit={this.handleSubmit}
            render={props => (
              <form onSubmit={props.handleSubmit}>
                <input
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.name}
                  name="name"
                />
                {props.errors.name && <div id="feedback">{props.errors.name}</div>}
                <button type="submit">Submit</button>
              </form>
            )}>
          </Formik>
        </div>
      </div>
    );
  }
}

export default withLayout(ContactUs);
