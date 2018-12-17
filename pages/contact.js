import withLayout from '../lib/withLayout';
import { Formik } from 'formik';


class ContactUs extends React.Component {
  constructor(props) {
    super(props)
  }
  static async getInitialProps() {
    // Fetch datam third party API here!
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
      <div style={{'margin-top': '64px'}}>
        This is the Contact Us Page
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
